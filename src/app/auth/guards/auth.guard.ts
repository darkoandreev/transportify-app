import { CanActivate, Router, UrlTree } from '@angular/router';

import { AuthService } from 'src/app/auth/store/services/auth.service';
import { IUser } from 'src/app/auth/store/models';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  async canActivate(): Promise<boolean | UrlTree> {
    const user: IUser = await this.authService.getUser();
    if (!user) {
      return this.router.parseUrl('auth/login');
    }

    const isRegistrationFinished = this.authService.isRegistrationFinished(user);

    if (!isRegistrationFinished) {
      return this.router.parseUrl('auth/signup/user-details');
    }
    return !!user;
  }
}
