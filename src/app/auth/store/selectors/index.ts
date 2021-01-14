import { createFeatureSelector, createSelector } from '@ngrx/store';

import { IState } from '../reducers';
import { adapter } from '../reducers/user-rating.reducer';

export const selectUserState = createFeatureSelector<IState>('userFeature');

const getUserState = createSelector(selectUserState, (state) => state.user);

export const selectUser = createSelector(getUserState, (state) => state.user);
export const selectUserDetails = createSelector(getUserState, (state) => state.userDetails);
