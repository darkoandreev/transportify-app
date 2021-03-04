import { ActivatedRoute, Router } from '@angular/router';

import { AuthFacade } from '../auth/store/facade/auth.facade';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { Component } from '@angular/core';
import { IUser } from '../auth/store/models';
import { Observable } from 'rxjs';
import { Platform } from '@ionic/angular';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss'],
})
export class ProfilePage {
  readonly env = environment;
  user$: Observable<IUser> = this.authFacade.userDetails$;
  fileUrl: string = environment.FILE_URL;

  private username: string;

  constructor(
    public authFacade: AuthFacade,
    private router: Router,
    private route: ActivatedRoute,
    private phoneCallNumber: CallNumber,
    private platform: Platform
  ) {}

  ionViewWillEnter(): void {
    this.username = this.route.snapshot.paramMap.get('username');
    this.authFacade.getUserDetails(this.username);
  }

  navigateToRating(userId: number): void {
    this.router.navigate(['tabs/profile/rating', userId]);
  }

  async goToUserDetailsPage(): Promise<void> {
    const user = await this.authFacade.getUser();
    this.router.navigate(['auth/signup/user-details', user.id]);
  }

  async phoneCall(phoneNumber: string): Promise<void> {
    if (!this.platform.is('cordova')) {
      return;
    }

    try {
      await this.phoneCallNumber.callNumber(phoneNumber, true);
    } catch (error) {
      console.error(error);
    }
  }
}
