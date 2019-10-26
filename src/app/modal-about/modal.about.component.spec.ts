import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Modal.AboutComponent } from './modal.about.component';

describe('Modal.AboutComponent', () => {
  let component: Modal.AboutComponent;
  let fixture: ComponentFixture<Modal.AboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Modal.AboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Modal.AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
