import { TestBed } from '@angular/core/testing';

import { MangoDbServiceService } from './mango-db-service.service';

describe('MangoDbServiceService', () => {
  let service: MangoDbServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MangoDbServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
