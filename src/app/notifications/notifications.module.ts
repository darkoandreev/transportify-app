import * as fromReducer from './store/reducers';

import { AsyncPipe, CommonModule } from '@angular/common';

import { EffectsModule } from '@ngrx/effects';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MyNotificationsListComponent } from './my-notifications-list/my-notifications-list.component';
import { NgModule } from '@angular/core';
import { NotificationEffect } from './store/effects/notification.effects';
import { NotificationFacade } from './store/facade/notification.facade';
import { NotificationsPage } from './notifications.page';
import { NotificationsPageRoutingModule } from './notifications-routing.module';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    NotificationsPageRoutingModule,
    SharedModule,
    StoreModule.forFeature('notification', fromReducer.reducerMap),
    EffectsModule.forFeature([NotificationEffect]),
  ],
  declarations: [NotificationsPage, MyNotificationsListComponent],
  providers: [NotificationFacade, AsyncPipe],
})
export class NotificationsPageModule {}
