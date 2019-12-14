import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  goToExploreSection(): void {
    this.router.navigate(['explore']);
  }
  goToLogin(): void {
    this.router.navigate(['userName']);
  }
  goToRegister(): void {
    this.router.navigate(['register']);
  }

}
