import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthEffect } from './store/effects/auth.effects';
import { AuthRoutingModule } from './auth-routing.module';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { IonicModule } from '@ionic/angular';
import { LoginPage } from './login/login.page';
import { NgModule } from '@angular/core';
import { SignupFormComponent } from './signup/signup-form/signup-form.component';
import { SignupPage } from './signup/signup.page';
import { StoreModule } from '@ngrx/store';
import { UserDetailsComponent } from './user-details/user-details.component';
import { reducerMap } from './store/reducers';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    StoreModule.forFeature('user', reducerMap),
    EffectsModule.forFeature([AuthEffect]),
  ],
  declarations: [LoginPage, SignupPage, SignupFormComponent, UserDetailsComponent],
})
export class AuthModule {}
