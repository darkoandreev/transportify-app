import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { VehicleDetailsFormComponent } from './vehicle-details/vehicle-details-form/vehicle-details-form.component';
import { VehicleEffect } from './store/effects/vehicle.effects';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { VehicleListItemComponent } from './vehicle-list/vehicle-list-item/vehicle-list-item.component';
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
  declarations: [
    VehiclePage,
    VehicleDetailsComponent,
    VehicleDetailsFormComponent,
    VehicleListComponent,
    VehicleListItemComponent,
  ],
})
export class VehiclePageModule {}
