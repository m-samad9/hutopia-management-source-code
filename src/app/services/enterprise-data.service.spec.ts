import { TestBed } from '@angular/core/testing';

import { EnterpriseDataService } from './enterprise-data.service';

describe('EnterpriseDataService', () => {
  let service: EnterpriseDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnterpriseDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
