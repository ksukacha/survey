import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {UsersService} from '../users.service';
import {Subscription} from 'rxjs';
import {User} from '../model/user.model';
import {Router} from '@angular/router';
import {LoginRequest} from '../model/loginRequest.model';
import {TokenServiceService} from '../token-service.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit, OnDestroy {
  public logInFormGroup: FormGroup;
  private submitted: boolean;
  private subscriptions: Subscription[] = [];
  private user: User;

  constructor(private usersService: UsersService,
              private router: Router,
              private tokenService: TokenServiceService,
              private userService: UsersService) {
  }

  ngOnInit() {
    this.logInFormGroup = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.minLength(6), Validators.required]),
      rememberMe: new FormControl()
    });
    // this.usersService.getLoggedUserSubject().subscribe(user => {
    //   this.user = user;
    // });
  }

  private get email() {
    return this.logInFormGroup.get('email');
  }

  private get password() {
    return this.logInFormGroup.get('password');
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.logInFormGroup.valid) {
      const email: string = this.email.value;
      const password: string = this.password.value;
      this.subscriptions.push(this.usersService.loginUser(new LoginRequest(email, password)).subscribe(tokenResponse => {
        console.log('token: ', tokenResponse);
        this.tokenService.setToken(tokenResponse.token);
        this.tokenService.setLoggedUserSubject();
       // this.router.navigate(['surveys']);
      }));

    }
  }
  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

}
