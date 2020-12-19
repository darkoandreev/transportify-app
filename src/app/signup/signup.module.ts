import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { SignupPage } from './signup.page';
import { SignupPageRoutingModule } from './signup-routing.module';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, ReactiveFormsModule, SignupPageRoutingModule],
  declarations: [SignupPage, SignupFormComponent],
})
export class SignupPageModule {}
