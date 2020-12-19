import { FormGroup } from '@angular/forms';

/**
 * Custom validator to check that two fields match
 * @param controlName string
 * @param matchingControlName  string
 */
export function PasswordsMustMatch(
  controlName: string,
  matchingControlName: string
): (formGroup: FormGroup) => void {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];

    if (matchingControl.errors && !matchingControl.errors.mustMatch) {
      return;
    }

    const error = control.value !== matchingControl.value ? { mustMatch: true } : null;
    matchingControl.setErrors(error);
  };
}
