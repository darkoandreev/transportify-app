import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { TransportsPage } from './transports.page';

const routes: Routes = [
  {
    path: '',
    component: TransportsPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab1PageRoutingModule {}
