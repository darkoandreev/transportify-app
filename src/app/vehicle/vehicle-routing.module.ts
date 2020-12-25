import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { VehiclePage } from './vehicle.page';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: VehiclePage,
      },
      {
        path: 'details',
        component: VehicleDetailsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VehiclePageRoutingModule {}
