import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';
import { ConfirmAccountPage } from './confirm-account/confirm-account.page';
import { LoginGuard } from './guards/login.guard';
import { LoginPage } from './login/login.page';
import { NgModule } from '@angular/core';
import { SignupPage } from './signup/signup.page';
import { UserDetailsComponent } from './user-details/user-details.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginPage,
    canActivate: [LoginGuard],
  },
  {
    path: 'signup',
    children: [
      {
        path: '',
        component: SignupPage,
      },
      {
        path: 'user-details',
        component: UserDetailsComponent,
      },
      {
        path: 'user-details/:id',
        component: UserDetailsComponent,
      },
    ],
  },
  {
    path: 'confirm-account',
    component: ConfirmAccountPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
