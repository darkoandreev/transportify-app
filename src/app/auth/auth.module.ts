import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthEffect } from './store/effects/auth.effects';
import { AuthRoutingModule } from './auth-routing.module';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { IonicModule } from '@ionic/angular';
import { LoginPage } from './login/login.page';
import { NgModule } from '@angular/core';
import { ReactiveComponentModule } from '@ngrx/component';
import { SharedModule } from '../shared/shared.module';
import { SignupFormComponent } from './signup/signup-form/signup-form.component';
import { SignupPage } from './signup/signup.page';
import { StoreModule } from '@ngrx/store';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserDetailsFormComponent } from './user-details/user-details-form/user-details-form.component';
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
    SharedModule,
    ReactiveComponentModule,
  ],
  declarations: [
    LoginPage,
    SignupPage,
    SignupFormComponent,
    UserDetailsComponent,
    UserDetailsFormComponent,
  ],
})
export class AuthModule {}
