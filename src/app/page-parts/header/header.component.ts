import { Component, OnInit } from '@angular/core';
import {ModalAboutComponent} from '../../modals/modal-about/modal.about.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ModalLoginComponent} from '../../modals/modal-login/modal-login.component';
import {ModalSignUpComponent} from '../../modals/modal-sign-up/modal-sign-up.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private modalService: NgbModal) { }
  ngOnInit() {
  }
  openLoginModal() {
    const modalLoginRef = this.modalService.open(ModalLoginComponent);
  }
  openSignUpModal() {
    const modalSignUpRef = this.modalService.open(ModalSignUpComponent);
  }
}
