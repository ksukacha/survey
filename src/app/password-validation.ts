import {AbstractControl} from '@angular/forms';

export class CustomPasswordValidation {
  static matchPassword(abstractControl: AbstractControl) {
    const password = abstractControl.get('password').value;
    const confirmPassword = abstractControl.get('repeatPassword').value;
    if (password !== confirmPassword) {
      abstractControl.get('repeatPassword').setErrors({
        NoPasswordMatch: true
      });
    } else {
      return null;
    }
  }
}
