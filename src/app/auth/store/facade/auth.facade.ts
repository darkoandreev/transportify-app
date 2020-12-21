import * as fromActions from '../actions/auth.actions';
import * as fromSelectors from '../selectors';

import { Store, select } from '@ngrx/store';

import { IState } from '../reducers';
import { IUser } from '../models';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthFacade {
  user$: Observable<IUser> = this.store.pipe(select(fromSelectors.selectUser));

  constructor(private store: Store<IState>) {}

  login(user: Partial<IUser>): void {
    this.store.dispatch(fromActions.login({ user }));
  }

  register(user: IUser): void {
    this.store.dispatch(fromActions.signUp({ user }));
  }

  updateUserDetails(user: Partial<IUser>): void {
    this.store.dispatch(fromActions.updateUserDetails({ user }));
  }
}
