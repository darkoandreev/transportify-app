import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { INotification } from '../store/models/notifications.model';

@Component({
  selector: 'app-my-notifications-list',
  templateUrl: './my-notifications-list.component.html',
  styleUrls: ['./my-notifications-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyNotificationsListComponent {
  @Input() notifications: INotification[];

  @Output() notificationClick = new EventEmitter<number>();
}
