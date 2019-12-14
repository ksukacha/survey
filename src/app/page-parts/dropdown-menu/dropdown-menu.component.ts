import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../users.service';
import {User} from '../../model/user.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.css']
})
export class DropdownMenuComponent implements OnInit {
  collapsed = true;
 // private loggedUser: User;
  constructor(private usersService: UsersService,
              private router: Router) { }

  ngOnInit() {
    // this.usersService.getLoggedUserSubject().subscribe(user => {
    //   this.loggedUser = user;
    // });
  }

  logOut(): void {
   // this.usersService.logOut();
    this.router.navigate(['welcome']);
  }
}
