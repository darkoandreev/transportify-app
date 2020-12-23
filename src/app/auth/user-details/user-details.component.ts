import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthFacade } from '../store/facade/auth.facade';
import { Component } from '@angular/core';
import { IUser } from '../store/models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent {
  userDetailsForm: FormGroup;
  user$: Observable<IUser> = this.authFacade$.user$;

  constructor(private fb: FormBuilder, private authFacade$: AuthFacade) {
    this.initForm();
  }

  onSubmit(): void {
    const user: IUser = this.userDetailsForm.value;
    this.authFacade$.updateUserDetails(user);
  }

  private initForm(): void {
    this.userDetailsForm = this.fb.group({
      image: ['test', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      gender: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      additionalDetails: '',
    });
  }
}