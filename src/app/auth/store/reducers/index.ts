import * as fromUser from './auth.reducer';

import { ActionReducerMap } from '@ngrx/store';

export interface IState {
  readonly user: fromUser.IUserState;
}

export const reducerMap: ActionReducerMap<IState> = {
  user: fromUser.userReducer,
};
