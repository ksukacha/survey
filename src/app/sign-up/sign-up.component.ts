import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {PasswordValidation} from '../password-validation';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  public signUpFormGroup: FormGroup;
  private submitted: boolean;
  private genders = ['Male', 'Female'];
  constructor() { }

  ngOnInit() {
    this.signUpFormGroup = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      userName: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.minLength(6), Validators.required]),
      repeatPassword: new FormControl('', [Validators.minLength(6), Validators.required]),
    });
  }
  get firstName() { return this.signUpFormGroup.get('firstName'); }
  get lastName() { return this.signUpFormGroup.get('lastName'); }
  get userName() { return this.signUpFormGroup.get('userName'); }
  get email() { return this.signUpFormGroup.get('email'); }
  get password() { return this.signUpFormGroup.get('password'); }
  get repeatPassword() { return this.signUpFormGroup.get('repeatPassword'); }
  onSubmit(): void {
    this.submitted = true;
  }
  pickGender(e) {
    this.signUpFormGroup.get('address.cityName').setValue(e.target.value, {
      onlySelf: true
    });
  }

}
