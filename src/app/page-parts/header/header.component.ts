import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ModalLoginComponent} from '../../modals/modal-login/modal-login.component';
import {ModalSignUpComponent} from '../../modals/modal-sign-up/modal-sign-up.component';
import {UsersService} from '../../users.service';
import {User} from '../../model/user.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // private loggedUser: User;
  private subscriptions: Subscription[];
  constructor(private modalService: NgbModal,
              private usersService: UsersService) { }
  ngOnInit() {
    // this.usersService.getLoggedUserSubject().subscribe(user => {
    //   this.loggedUser = user;
    // });
  }
  openLoginModal() {
    const modalLoginRef = this.modalService.open(ModalLoginComponent);
  }
  openSignUpModal() {
    const modalSignUpRef = this.modalService.open(ModalSignUpComponent);
  }
}
