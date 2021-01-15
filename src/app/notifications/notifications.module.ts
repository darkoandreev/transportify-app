import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MyNotificationsListComponent } from './my-notifications-list/my-notifications-list.component';
import { NgModule } from '@angular/core';
import { NotificationsPage } from './notifications.page';
import { NotificationsPageRoutingModule } from './notifications-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [IonicModule, CommonModule, FormsModule, NotificationsPageRoutingModule, SharedModule],
  declarations: [NotificationsPage, MyNotificationsListComponent],
})
export class NotificationsPageModule {}
