import * as fromActions from '../actions/notification.actions';
import * as fromReducer from '../reducers/notification.reducer';

import { Store, select } from '@ngrx/store';

import { INotification } from '../models/notifications.model';
import { IState } from '../../store/reducers';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable()
export class NotificationFacade {
  notifications$: Observable<INotification[]> = this.store.pipe(
    select(fromReducer.getAll),
    filter((notification) => !!notification?.length)
  );

  constructor(private store: Store<IState>) {}

  getAll(): void {
    this.store.dispatch(fromActions.getNotifications());
  }

  updateIsRead(notificationIds: number[], isRead: boolean): void {
    this.store.dispatch(fromActions.updateNotificationIsRead({ notificationIds, isRead }));
  }
}
