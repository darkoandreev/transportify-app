import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit } from '@angular/core';

import { INotification } from '../store/models/notifications.model';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-notifications-popover',
  templateUrl: './notifications-popover.component.html',
  styleUrls: ['./notifications-popover.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationsPopoverComponent {
  @Input()
  set notifications(values: INotification[]) {
    if (!values?.length) {
      return;
    }
    this.readNotificationIds = values
      .filter((notification) => notification.isRead)
      .map((notif) => notif.id);
    this.nonReadNotificationIds = values
      .filter((notification) => !notification.isRead)
      .map((notif) => notif.id);
  }

  readNotificationIds: number[];
  nonReadNotificationIds: number[];

  constructor(public popoverController: PopoverController) {}
}
