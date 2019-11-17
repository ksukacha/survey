import { TestBed } from '@angular/core/testing';

import { OpenedSurveyService } from './opened-survey.service';

describe('OpenedSurveyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OpenedSurveyService = TestBed.get(OpenedSurveyService);
    expect(service).toBeTruthy();
  });
});
