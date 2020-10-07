import { TestBed } from '@angular/core/testing';

import { CreditoServiceService } from './credito-service.service';

describe('CreditoServiceService', () => {
  let service: CreditoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreditoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
