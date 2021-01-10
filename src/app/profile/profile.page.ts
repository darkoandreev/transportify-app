import { AuthFacade } from '../auth/store/facade/auth.facade';
import { Component } from '@angular/core';
import { IUser } from '../auth/store/models';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss'],
})
export class ProfilePage {
  user$: Observable<IUser> = this.authFacade.user$;

  constructor(public authFacade: AuthFacade) {}

  ionViewWillEnter(): void {
    this.authFacade.getUserDetails();
  }
}
