import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthFacade } from '../store/facade/auth.facade';
import { Component } from '@angular/core';
import { IUser } from '../store/models';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authFacade$: AuthFacade) {
    this.initForm();
  }

  onSubmit(): void {
    const user: IUser = this.loginForm.value;
    this.authFacade$.login(user);
  }

  private initForm(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
}
