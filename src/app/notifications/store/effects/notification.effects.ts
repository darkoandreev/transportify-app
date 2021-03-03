import * as fromActions from '../actions/notification.actions';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { NotificationService } from '../services/notification.service';

@Injectable()
export class NotificationEffect {
  constructor(private actions$: Actions, private notificationService: NotificationService) {}

  getAll$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.getNotifications),
      switchMap(() =>
        this.notificationService.getAll().pipe(
          map((notifications) => fromActions.getNotificationsSuccess({ notifications })),
          catchError((error) => [fromActions.getNotificationsFailed(error)])
        )
      )
    )
  );

  updateIsRead$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.updateNotificationIsRead),
      switchMap(({ notificationIds, isRead }) =>
        this.notificationService.updateIsRead(notificationIds, isRead).pipe(
          map(() => fromActions.updateNotificationIsReadSuccess({ notificationIds, isRead })),
          catchError((error) => [fromActions.updateNotificationIsReadFailed(error)])
        )
      )
    )
  );
}
