import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyAnswerTabComponent } from './survey-answer-tab.component';

describe('SurveyAnswerTabComponent', () => {
  let component: SurveyAnswerTabComponent;
  let fixture: ComponentFixture<SurveyAnswerTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyAnswerTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyAnswerTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
