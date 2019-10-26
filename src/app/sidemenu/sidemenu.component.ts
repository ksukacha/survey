import { Component, OnInit } from '@angular/core';
import {ModalAboutComponent} from '../modal-about/modal.about.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {

  constructor(private modalService: NgbModal) {}
  openSurveyModal() {
    const modalRef = this.modalService.open(ModalAboutComponent);
  }

  ngOnInit() {
  }

}
