import * as fromActions from '../actions/auth.actions';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

import { AlertService } from 'src/app/shared/services/alert.service';
import { AuthService } from '../services/auth.service';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { from } from 'rxjs';

@Injectable()
export class AuthEffect {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private alertService: AlertService,
    private router: Router,
    private route: ActivatedRoute,
    private storage: Storage
  ) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.login),
      switchMap(({ user }) =>
        this.authService.login(user).pipe(
          map((response) => fromActions.loginSuccess({ response })),
          catchError((error) => [fromActions.loginFailed(error)])
        )
      )
    )
  );

  signUp$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.signUp),
      switchMap(({ user }) =>
        this.authService.register(user).pipe(
          map((response) => fromActions.signUpSuccess({ user: response })),
          catchError((error) => [fromActions.signUpFailed(error)])
        )
      )
    )
  );

  getUserDetails$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.getUserDetails),
      switchMap(({ username }) =>
        this.authService.getUserDetails(username).pipe(
          map((user) => fromActions.getUserDetailsSuccess({ user })),
          catchError((error) => [fromActions.getUserDetailsFailed(error)])
        )
      )
    )
  );

  signUpSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromActions.signUpSuccess),
        tap(() => {
          this.alertService.confirmAlert(
            'Confirm account',
            'Please check your email and activate your account!',
            () => this.router.navigate(['auth/login'])
          );
        })
      ),
    { dispatch: false }
  );

  loginSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromActions.loginSuccess),
        tap((res) => {
          this.storage.set('parsedToken', this.authService.decodeToken(res.response.token));
          const returnUrl = this.route.snapshot.queryParams?.returnUrl || '/tabs';
          this.router.navigate([returnUrl]);
        })
      ),
    { dispatch: false }
  );

  updateUserDetails$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.updateUserDetails),
      switchMap(({ user }) =>
        this.authService.updateUserDetails(user).pipe(
          map((userDetails) => fromActions.updateUserDetailsSuccess({ user: userDetails })),
          catchError((error) => [fromActions.updateUserDetailsFailed(error)])
        )
      )
    )
  );

  updateUserDetailsSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromActions.updateUserDetailsSuccess),
        tap(({ user }) => {
          this.storage.set('parsedToken', user);
          this.router.navigate(['tabs']);
        })
      ),
    { dispatch: false }
  );

  logOut$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.logOut),
      switchMap(() =>
        from(this.storage.remove('parsedToken')).pipe(map(() => fromActions.logOutSuccess()))
      )
    )
  );

  logOutSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromActions.logOutSuccess),
        tap(() => {
          this.router.navigate(['auth/login']);
        })
      ),
    {
      dispatch: false,
    }
  );
}
