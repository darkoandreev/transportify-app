import { CanActivate, Router, UrlTree } from '@angular/router';

import { AuthService } from 'src/app/auth/store/services/auth.service';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LoginGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  async canActivate(): Promise<boolean | UrlTree> {
    const user = await this.authService.getUser();
    if (user) {
      return this.router.parseUrl('/tabs');
    }

    return true;
  }
}
