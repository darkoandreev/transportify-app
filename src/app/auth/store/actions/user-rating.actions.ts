import { IUserRating, IUserRatingOccuranceResponse } from '../models';
import { createAction, props } from '@ngrx/store';

import { IRateUserRequest } from '../models/request/rate-user.request';

// GET USER RATINGS
export const getUserRatings = createAction(
  '[Profile Page] Get user ratings',
  props<{ ratingValue: number; userId?: string }>()
);
export const getUserRatingsSuccess = createAction(
  '[Profile Page] Get user ratings success',
  props<{ userRatings: IUserRating[] }>()
);
export const getUserRatingsFailed = createAction(
  '[Profile Page] Get user ratings failed',
  (error: Error) => ({ error })
);

// GET USER RATING OCCURRENCES
export const getUserRatingOccurrences = createAction(
  '[Profile Page] Get user rating occurrences',
  props<{ userId?: string }>()
);
export const getUserRatingOccurrencesSuccess = createAction(
  '[Profile Page] Get user rating occurrences success',
  props<{ occurrences: IUserRatingOccuranceResponse }>()
);
export const getUserRatingOccurrencesFailed = createAction(
  '[Profile Page] Get user rating occurrences failed',
  (error: Error) => ({ error })
);

// RATE USER
export const rateUser = createAction(
  '[Ratings and comments] Rate user',
  props<{ rateUser: IRateUserRequest }>()
);
export const rateUserSuccess = createAction(
  '[Ratings and comments] Rate user success',
  props<{ userRating: IUserRating }>()
);
export const rateUserFailed = createAction(
  '[Ratings and comments] Rate user failed',
  (error: Error) => ({ error })
);
