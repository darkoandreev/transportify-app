import { AuthFacade } from '../auth/store/facade/auth.facade';
import { Component } from '@angular/core';
import { IUser } from '../auth/store/models';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss'],
})
export class ProfilePage {
  user$: Observable<IUser> = this.authFacade.userDetails$;
  fileUrl: string = environment.FILE_URL;

  constructor(public authFacade: AuthFacade, private router: Router) {}

  ionViewWillEnter(): void {
    this.authFacade.getUserDetails();
  }

  async goToUserDetailsPage(): Promise<void> {
    const user = await this.authFacade.getUser();
    this.router.navigate(['auth/signup/user-details', user.id]);
  }
}
