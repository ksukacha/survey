import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {PasswordValidation} from '../password-validation';
import {User} from '../model/user.model';
import {UsersService} from '../users.service';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  public signUpFormGroup: FormGroup;
  private submitted: boolean;
  private genders = ['Male', 'Female'];
  private newUser: User;
  private subscriptions: Subscription[] = [];

  constructor(private usersService: UsersService,
              private router: Router,
              private activeModal: NgbActiveModal) {
  }

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

  get firstName() {
    return this.signUpFormGroup.get('firstName');
  }

  get lastName() {
    return this.signUpFormGroup.get('lastName');
  }

  get userName() {
    return this.signUpFormGroup.get('userName');
  }

  get email() {
    return this.signUpFormGroup.get('email');
  }

  get userGender() {
    return this.signUpFormGroup.get('gender');
  }

  get password() {
    return this.signUpFormGroup.get('password');
  }

  get repeatPassword() {
    return this.signUpFormGroup.get('repeatPassword');
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.signUpFormGroup.valid) {
      const firstName: string = this.signUpFormGroup.get('firstName').value;
      const lastName: string = this.signUpFormGroup.get('lastName').value;
      const userName: string = this.signUpFormGroup.get('userName').value;
      const email: string = this.signUpFormGroup.get('email').value;
      const userGender: string = this.signUpFormGroup.get('gender').value;
      const password: string = this.signUpFormGroup.get('password').value;
      const newUser = new User(firstName, lastName, userName, email, password, 'USER');
      this.subscriptions.push(this.usersService.saveUser(newUser).subscribe(user => {
        this.newUser = user;
        this.activeModal.dismiss();
        // this.router.navigate(['surveys']);
      }));
    }
  }

  pickGender(e): void {
    this.signUpFormGroup.get('gender').setValue(e.target.value, {
      onlySelf: true
    });
  }

}
