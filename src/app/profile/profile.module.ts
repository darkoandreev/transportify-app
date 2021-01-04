import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { ProfilePage } from './profile.page';
import { ProfilePageRoutingModule } from './profile-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [IonicModule, CommonModule, FormsModule, ProfilePageRoutingModule, SharedModule],
  declarations: [ProfilePage],
})
export class ProfilePageModule {}
