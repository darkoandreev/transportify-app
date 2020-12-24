import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { VehicleEffect } from './store/effects/vehicle.effects';
import { VehiclePage } from './vehicle.page';
import { VehiclePageRoutingModule } from './vehicle-routing.module';
import { reducerMap } from './store/reducers';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VehiclePageRoutingModule,
    ReactiveFormsModule,
    EffectsModule.forFeature([VehicleEffect]),
    StoreModule.forFeature('vehicle', reducerMap),
    SharedModule,
  ],
  declarations: [VehiclePage, VehicleDetailsComponent],
})
export class VehiclePageModule {}
