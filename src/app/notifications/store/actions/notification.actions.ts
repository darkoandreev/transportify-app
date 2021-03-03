import { createAction, props } from '@ngrx/store';

import { INotification } from '../models/notifications.model';

export const getNotifications = createAction('[Notifications Tab] Get notifications');
export const getNotificationsSuccess = createAction(
  '[Notifications Tab] Get notifications success',
  props<{ notifications: INotification[] }>()
);
export const getNotificationsFailed = createAction(
  '[Notifications Tab] Get notifications failed',
  (error: Error) => ({ error })
);

export const updateNotificationIsRead = createAction(
  '[Notifications Tab] Update is read property',
  props<{ notificationIds: number[]; isRead: boolean }>()
);
export const updateNotificationIsReadSuccess = createAction(
  '[Notifications Tab] Update is read property success',
  props<{ notificationIds: number[]; isRead: boolean }>()
);
export const updateNotificationIsReadFailed = createAction(
  '[Notifications Tab] Update is read property failed',
  (error: Error) => ({ error })
);
