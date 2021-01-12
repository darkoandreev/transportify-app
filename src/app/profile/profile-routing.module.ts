import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { ProfilePage } from './profile.page';
import { ProfileRatingComponent } from './profile-rating/profile-rating.component';

const routes: Routes = [
  {
    path: '',
    component: ProfilePage,
    children: [
      {
        path: '',
        component: ProfileDetailsComponent,
      },
      {
        path: 'rating',
        component: ProfileRatingComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilePageRoutingModule {}
