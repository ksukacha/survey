import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyQuestionTabComponent } from './survey-question-tab.component';

describe('SurveyQuestionTabComponent', () => {
  let component: SurveyQuestionTabComponent;
  let fixture: ComponentFixture<SurveyQuestionTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyQuestionTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyQuestionTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
