import * as fromActions from '../actions/auth.actions';
import * as jwtDecode from 'jwt-decode';

import { Action, createReducer, on } from '@ngrx/store';
import { EntityAdapter, EntityState, createEntityAdapter } from '@ngrx/entity';
import { IAuthError, IToken } from '../models';

import { IUser } from '../models';

export interface IUserState extends EntityState<IUser> {
  isAuthenticated: boolean;
  user: IUser | null;
  error: IAuthError;
}

export const adapter: EntityAdapter<IUser> = createEntityAdapter<IUser>();

const initialState: IUserState = adapter.getInitialState({
  isAuthenticated: false,
  user: null,
  error: null,
});

const featureReducer = createReducer(
  initialState,
  on(fromActions.loginSuccess, (state, { response }) => ({
    ...state,
    user: JSON.parse(jwtDecode.default<IToken>(response.token)?.sub),
    isAuthenticated: true,
  })),
  on(fromActions.loginFailed, (state, { error }) => ({
    ...state,
    error,
    isAuthenticated: false,
  })),
  on(fromActions.signUpSuccess, (state, { user }) => ({
    ...state,
    user,
  })),
  on(fromActions.signUpFailed, (state, { error }) => ({
    ...state,
    error,
  })),
  on(fromActions.updateUserDetailsSuccess, (state, { user }) => ({
    ...state,
    user,
  })),
  on(fromActions.getUserDetailsSuccess, (state, { user }) => ({
    ...state,
    user,
  }))
);

export function userReducer(state: IUserState | undefined, action: Action) {
  return featureReducer(state, action);
}
