import { Component } from '@angular/core';
import { MyNotificationsListComponent } from './my-notifications-list/my-notifications-list.component';
import { NotificationsPopoverComponent } from './notifications-popover/notifications-popover.component';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-notifications',
  templateUrl: 'notifications.page.html',
  styleUrls: ['notifications.page.scss'],
})
export class NotificationsPage {
  constructor(public popoverController: PopoverController) {}

  async presentPopover(event: Event) {
    const popover = await this.popoverController.create({
      component: NotificationsPopoverComponent,
      event,
      translucent: true,
    });
    return await popover.present();
  }
}
