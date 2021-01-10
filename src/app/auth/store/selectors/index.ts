import { createFeatureSelector, createSelector } from '@ngrx/store';

import { IUserState } from '../reducers/auth.reducer';

export const selectUserState = createFeatureSelector<IUserState>('user');

const getUser = createSelector(selectUserState, (state) => state.user);
export const selectUser = createSelector(selectUserState, getUser);
