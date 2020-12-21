import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { IUser } from '../../store/models';
import { PasswordsMustMatch } from './validators/password-must-match.validator';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss'],
})
export class SignupFormComponent implements OnDestroy {
  @Output() submitForm = new EventEmitter<IUser>();

  signupForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.initForm();
  }

  ngOnDestroy(): void {
    this.signupForm.reset();
  }

  private initForm(): void {
    this.signupForm = this.fb.group(
      {
        email: ['', [Validators.required, Validators.email]],
        username: ['', Validators.required],
        password: [
          '',
          [
            Validators.required,
            Validators.pattern(
              '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}'
            ),
          ],
        ],
        confirmPassword: ['', Validators.required],
      },
      {
        validators: PasswordsMustMatch('password', 'confirmPassword'),
      }
    );
  }
}
