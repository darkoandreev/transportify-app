import * as fromActions from '../actions/auth.actions';
import * as fromSelectors from '../selectors';

import { Store, select } from '@ngrx/store';

import { AuthService } from '../services/auth.service';
import { IState } from '../reducers';
import { IUser } from '../models';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthFacade {
  user$: Observable<IUser> = this.store.pipe(select(fromSelectors.selectUser));
  userDetails$: Observable<IUser> = this.store.pipe(select(fromSelectors.selectUserDetails));

  constructor(private store: Store<IState>, private authService: AuthService) {}

  login(user: Partial<IUser>): void {
    this.store.dispatch(fromActions.login({ user }));
  }

  register(user: IUser): void {
    this.store.dispatch(fromActions.signUp({ user }));
  }

  logOut(): void {
    this.store.dispatch(fromActions.logOut());
  }

  getUserDetails(username?: string): void {
    this.store.dispatch(fromActions.getUserDetails({ username }));
  }

  getUser(): Promise<IUser> {
    return this.authService.getUser();
  }

  confirmAccount(confirmationToken: string): void {
    this.store.dispatch(fromActions.confirmAccount({ confirmationToken }));
  }

  async updateUserDetails(user: Partial<IUser>): Promise<void> {
    const userFromStorage = await this.authService.getUser();
    user = {
      ...user,
      id: userFromStorage.id,
    };
    this.store.dispatch(fromActions.updateUserDetails({ user }));
  }
}
