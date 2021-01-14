import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { ProfilePage } from './profile.page';
import { ProfileRatingComponent } from './profile-rating/profile-rating.component';

const routes: Routes = [
  {
    path: '',
    component: ProfilePage,
  },
  {
    path: 'rating',
    component: ProfileRatingComponent,
  },
  {
    path: 'rating/:userId',
    component: ProfileRatingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilePageRoutingModule {}
