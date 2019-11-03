import { Injectable } from '@angular/core';
import {Observable, ReplaySubject, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurItemTypeService {
  subject: Subject<string> = new ReplaySubject(1);
  constructor() { }
  setCurrentItemType(itemType: string) {
    this.subject.next(itemType);
  }
  getSubject(): Observable<string> {
    return this.subject.asObservable();
  }
}
