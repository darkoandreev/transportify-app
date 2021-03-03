import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { NotificationFacade } from './store/facade/notification.facade';
import { NotificationsPopoverComponent } from './notifications-popover/notifications-popover.component';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-notifications',
  templateUrl: 'notifications.page.html',
  styleUrls: ['notifications.page.scss'],
})
export class NotificationsPage {
  constructor(
    public popoverController: PopoverController,
    public notificationFacade: NotificationFacade,
    private asyncPipe: AsyncPipe
  ) {}

  ionViewWillEnter(): void {
    this.notificationFacade.getAll();
  }

  onNotificationClick(notificationId: number): void {
    this.notificationFacade.updateIsRead([notificationId], true);
  }

  async presentPopover(event: Event) {
    const popover = await this.popoverController.create({
      component: NotificationsPopoverComponent,
      event,
      translucent: true,
      componentProps: {
        notifications: this.asyncPipe.transform(this.notificationFacade.notifications$),
      },
    });
    await popover.present();
    const { data } = await popover.onDidDismiss();
    if (!data) {
      return;
    }

    this.notificationFacade.updateIsRead(data.ids, data.isRead);
  }
}
