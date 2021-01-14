import { AuthModule } from '../auth/auth.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { NgRatingModule } from 'd-ng-rating';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { ProfilePage } from './profile.page';
import { ProfilePageRoutingModule } from './profile-routing.module';
import { ProfileRatingComponent } from './profile-rating/profile-rating.component';
import { ProfileRatingModalComponent } from './profile-rating/profile-rating-modal/profile-rating-modal.component';
import { ProfileRatingOccurrencesComponent } from './profile-rating/profile-rating-occurrences/profile-rating-occurrences.component';
import { ProfileRatingsListComponent } from './profile-rating/profile-ratings-list/profile-ratings-list.component';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ProfilePageRoutingModule,
    SharedModule,
    AuthModule,
    NgRatingModule,
  ],
  declarations: [
    ProfilePage,
    ProfileDetailsComponent,
    ProfileRatingComponent,
    ProfileRatingOccurrencesComponent,
    ProfileRatingsListComponent,
    ProfileRatingModalComponent,
  ],
})
export class ProfilePageModule {}
