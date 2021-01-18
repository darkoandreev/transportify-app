import { AuthFacade } from '../store/facade/auth.facade';
import { Component } from '@angular/core';
import { IUser } from '../store/models';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage {
  constructor(public authFacade: AuthFacade) {}

  onSubmit(user: IUser): void {
    this.authFacade.register(user);
  }
}
