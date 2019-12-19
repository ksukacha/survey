import {Component, OnDestroy, OnInit} from '@angular/core';
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
  private userIsLogged: boolean = false;
  private subscriptions: Subscription[] = [];

  constructor(
    private curItemTypeService: CurItemTypeService,
    private router: Router,
    private usersService: UsersService) {
  }

  ngOnInit() {
    this.subscriptions.push(this.curItemTypeService.getSubject().subscribe(curItemType => this.curItemType = curItemType));
    // this.subscriptions.push(this.usersService.getLoggedUserSubject().subscribe(user => {
    //   this.loggedUser = user;
    // }));
    this.subscriptions.push(this.usersService.loggedUserSubject.asObservable().subscribe(user => {
      if (user != null) {
        this.userIsLogged = true;
      } else {
        this.userIsLogged = false;
      }
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
