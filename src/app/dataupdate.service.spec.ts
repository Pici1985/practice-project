import { TestBed } from '@angular/core/testing';

import { DataupdateService } from './dataupdate.service';

describe('DataupdateService', () => {
  let service: DataupdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataupdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
