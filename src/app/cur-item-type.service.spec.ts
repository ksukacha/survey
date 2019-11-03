import { TestBed } from '@angular/core/testing';

import { CurItemTypeService } from './cur-item-type.service';

describe('CurItemTypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CurItemTypeService = TestBed.get(CurItemTypeService);
    expect(service).toBeTruthy();
  });
});
