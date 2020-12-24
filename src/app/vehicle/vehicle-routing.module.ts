import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { VehiclePage } from './vehicle.page';

const routes: Routes = [
  {
    path: '',
    component: VehiclePage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VehiclePageRoutingModule {}
