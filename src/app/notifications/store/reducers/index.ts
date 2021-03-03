import * as fromReducer from './notification.reducer';

import { ActionReducerMap } from '@ngrx/store';

export interface IState {
  readonly notification: fromReducer.INotificationState;
}

export const reducerMap: ActionReducerMap<IState> = {
  notification: fromReducer.notificationReducer,
};
