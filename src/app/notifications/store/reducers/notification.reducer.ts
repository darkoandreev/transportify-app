import * as fromActions from '../actions/notification.actions';

import { Action, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { EntityAdapter, EntityState, createEntityAdapter } from '@ngrx/entity';

import { INotification } from '../models/notifications.model';
import { IState } from '.';

export interface INotificationState extends EntityState<INotification> {
  error?: Error;
}

export const adapter: EntityAdapter<INotification> = createEntityAdapter<INotification>({
  selectId: (notification) => notification.id,
});

const initialState: INotificationState = adapter.getInitialState();

const featureReducer = createReducer(
  initialState,
  on(fromActions.getNotificationsSuccess, (state, { notifications }) =>
    adapter.setAll(notifications, state)
  ),
  on(fromActions.getNotificationsFailed, (state, { error }) => ({
    ...state,
    error,
  })),
  on(fromActions.updateNotificationIsReadSuccess, (state, { notificationIds, isRead }) => {
    const entities = notificationIds.map((id) => {
      return {
        id,
        changes: { isRead },
      };
    });
    return adapter.updateMany(entities, state);
  }),
  on(fromActions.updateNotificationIsReadFailed, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function notificationReducer(state: INotificationState | undefined, action: Action) {
  return featureReducer(state, action);
}

const selectState = createFeatureSelector<IState>('notification');

const selectNotificationState = createSelector(selectState, (state) => state.notification);

const { selectAll } = adapter.getSelectors(selectNotificationState);

export const getAll = selectAll;
