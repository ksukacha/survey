import {AbstractControl, ValidatorFn} from '@angular/forms';

export class PasswordValidation {
  static MatchPassword(abstractControl: AbstractControl) {
    const password = abstractControl.get('password').value;
    const confirmPassword = abstractControl.get('repeatPassword').value;
    if (password !== confirmPassword) {
      abstractControl.get('repeatPassword').setErrors({
        MatchPassword: true
      });
    } else {
      return null;
    }
  }
}
