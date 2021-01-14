import * as fromUser from './auth.reducer';
import * as fromUserRating from './user-rating.reducer';

import { ActionReducerMap } from '@ngrx/store';

export interface IState {
  readonly user: fromUser.IUserState;
  readonly userRating: fromUserRating.IUserRatingState;
}

export const reducerMap: ActionReducerMap<IState> = {
  user: fromUser.userReducer,
  userRating: fromUserRating.userRatingReducer,
};
