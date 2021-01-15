import { RouterModule, Routes } from '@angular/router';

import { DriveTransportPreviewComponent } from './drive-transport-preview/drive-transport-preview.component';
import { NgModule } from '@angular/core';
import { TransportSearchResultsPage } from './transport-search-results/transport-search-results.page';
import { TransportsPage } from './transports.page';

const routes: Routes = [
  {
    path: '',
    component: TransportsPage,
  },
  {
    path: 'results/:id',
    component: TransportSearchResultsPage,
  },
  {
    path: 'drive-transport/:id',
    component: DriveTransportPreviewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransportPageRoutingModule {}
