import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { Tab1PageRoutingModule } from './transports-routing.module';
import { TransportDetailsModule } from './transport-details/transport-details.module';
import { TransportListComponent } from './transport-list/transport-list.component';
import { TransportListItemComponent } from './transport-list/transport-list-item/transport-list-item.component';
import { TransportsPage } from './transports.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab1PageRoutingModule,
    TransportDetailsModule,
    SharedModule,
  ],
  declarations: [TransportsPage, TransportListComponent, TransportListItemComponent],
})
export class Tab1PageModule {}
