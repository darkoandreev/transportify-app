import * as fromActions from '../actions/user-rating.actions';

import { Action, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { EntityAdapter, EntityState, createEntityAdapter } from '@ngrx/entity';
import { IUserRating, IUserRatingOccuranceResponse } from '../models';

import { IState } from '.';

export interface IUserRatingState extends EntityState<IUserRating> {
  occurrences: IUserRatingOccuranceResponse;
  error?: Error;
}

export const adapter: EntityAdapter<IUserRating> = createEntityAdapter<IUserRating>({
  selectId: (state) => state.createdAt.toString(),
});

const initialState: IUserRatingState = adapter.getInitialState({
  occurrences: null,
});

const featureReducer = createReducer(
  initialState,
  on(fromActions.getUserRatingsSuccess, (state, { userRatings }) =>
    adapter.setAll(userRatings, state)
  ),
  on(fromActions.getUserRatingOccurrencesSuccess, (state, { occurrences }) => ({
    ...state,
    occurrences,
  }))
);

export function userRatingReducer(state: IUserRatingState | undefined, action: Action) {
  return featureReducer(state, action);
}

const selectState = createFeatureSelector<IState>('userFeature');

const selectUserRatingState = createSelector(selectState, (state) => state.userRating);

const { selectAll } = adapter.getSelectors(selectUserRatingState);

export const getAllRatings = selectAll;

export const getAllRatingOccurrences = createSelector(
  selectUserRatingState,
  (state) => state.occurrences
);
