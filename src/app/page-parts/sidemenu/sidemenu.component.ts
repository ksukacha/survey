import {Component, OnDestroy, OnInit} from '@angular/core';
import {ModalAboutComponent} from '../../modals/modal-about/modal.about.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {CurItemTypeService} from '../../cur-item-type.service';
import {Router} from '@angular/router';
import {UsersService} from '../../users.service';
import {User} from '../../model/user.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit, OnDestroy {
  curItemType: string;
  private loggedUser: User;
  private subscriptions: Subscription[] = [];
  constructor(
    private modalService: NgbModal,
    private curItemTypeService: CurItemTypeService,
    private router: Router,
    private usersService: UsersService) {}
  openSurveyModal() {
    /**
     * Opens a new modal window with the specified content and using supplied options. Content can be provided
     * as a TemplateRef or a component type. If you pass a component type as content then instances of those
     * components can be injected with an instance of the NgbActiveModal class. You can use methods on the
     * NgbActiveModal class to close / dismiss modals from "inside" of a component.
     */
    const modalRef = this.modalService.open(ModalAboutComponent);
  }

  ngOnInit() {
    this.subscriptions.push(this.curItemTypeService.getSubject().subscribe(curItemType => this.curItemType = curItemType));
    this.subscriptions.push(this.usersService.getLoggedUserSubject().subscribe(user => {
      this.loggedUser = user;
    }));
  }
  setSurveyItemType(): void {
    this.curItemTypeService.setCurrentItemType('Survey');
    this.router.navigate(['new']);
  }
  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

}
