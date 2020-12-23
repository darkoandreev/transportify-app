import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { Tab1Page } from './transports.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab1PageRoutingModule {}
