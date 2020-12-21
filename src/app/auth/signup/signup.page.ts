import { Component, OnInit } from '@angular/core';

import { AuthFacade } from '../store/facade/auth.facade';
import { IUser } from '../store/models';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  constructor(public authFacade: AuthFacade) {}

  ngOnInit() {}

  onSubmit(user: IUser): void {
    this.authFacade.register(user);
  }
}
