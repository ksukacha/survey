import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {UsersService} from '../users.service';
import {Subscription} from 'rxjs';
import {User} from '../model/user.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  public logInFormGroup: FormGroup;
  private submitted: boolean;
  private subscriptions: Subscription[] = [];
  private user: User;

  constructor(private usersService: UsersService,
              private router: Router) {
  }

  ngOnInit() {
    this.logInFormGroup = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.minLength(6), Validators.required]),
      rememberMe: new FormControl()
    });
    this.usersService.getLoggedUserSubject().subscribe(user => {
      this.user = user;
    });
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
      this.subscriptions.push(this.usersService.getUser(email).subscribe(user => {
        this.user = user;
        // if email and pass are correct - user is logged in
        this.usersService.setLoggedUser(this.user);
        console.log('from log-in component', this.user.login);
        this.router.navigate(['surveys']);
      }));

    }
  }

}
