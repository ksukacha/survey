import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  public logInFormGroup: FormGroup;
  private submitted: boolean;
  constructor() { }

  ngOnInit() {
    this.logInFormGroup = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.minLength(6), Validators.required]),
      rememberMe: new FormControl()
    });
  }
  private get email() { return this.logInFormGroup.get('email'); }
  private get password() { return this.logInFormGroup.get('password'); }
  onSubmit(): void {
    this.submitted = true;
  }

}
