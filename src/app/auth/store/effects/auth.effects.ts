import * as fromActions from '../actions/auth.actions';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

import { AuthService } from '../services/auth.service';
import { IUser } from '../models';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Store } from '@ngrx/store';

@Injectable()
export class AuthEffect {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private store: Store<IUser>,
    private router: Router,
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
          map((response) => {
            const partialUser = {
              username: user.username,
              password: user.password,
            };

            this.store.dispatch(fromActions.login({ user: partialUser }));
            return fromActions.signUpSuccess({ user: response });
          }),
          catchError((error) => [fromActions.signUpFailed(error)])
        )
      )
    )
  );

  signUpSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromActions.signUpSuccess),
        tap(() => this.router.navigate(['auth/signup/user-details']))
      ),
    { dispatch: false }
  );

  loginSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromActions.loginSuccess),
        tap((res) => {
          this.storage.set('parsedToken', this.authService.decodeToken(res.response.token));
          this.router.navigate(['tabs']);
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
}
