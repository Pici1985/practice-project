import { TestBed } from '@angular/core/testing';

import { DatadeleteService } from './datadelete.service';

describe('DatadeleteService', () => {
  let service: DatadeleteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatadeleteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
