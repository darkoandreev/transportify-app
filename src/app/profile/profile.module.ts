import { AuthModule } from '../auth/auth.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { ProfilePage } from './profile.page';
import { ProfilePageRoutingModule } from './profile-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ProfilePageRoutingModule,
    SharedModule,
    AuthModule,
  ],
  declarations: [ProfilePage, ProfileDetailsComponent],
})
export class ProfilePageModule {}
