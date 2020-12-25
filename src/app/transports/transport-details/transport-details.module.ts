import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { ReactiveComponentModule } from '@ngrx/component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { TransportDetailsComponent } from './transport-details.component';
import { TransportDriveFormComponent } from './transport-drive-form/transport-drive-form.component';
import { TransportRideFormComponent } from './transport-ride-form/transport-ride-form.component';

@NgModule({
  declarations: [
    TransportDetailsComponent,
    TransportRideFormComponent,
    TransportDriveFormComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ReactiveComponentModule,
  ],
})
export class TransportDetailsModule {}
