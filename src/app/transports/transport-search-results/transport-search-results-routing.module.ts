import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransportSearchResultsPage } from './transport-search-results.page';

const routes: Routes = [
  {
    path: '',
    component: TransportSearchResultsPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransportSearchResultsPageRoutingModule {}
