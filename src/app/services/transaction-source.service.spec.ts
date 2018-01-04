import { TestBed, inject } from '@angular/core/testing';

import { TransactionSourceService } from './transaction-source.service';

describe('TransactionSourceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TransactionSourceService]
    });
  });

  it('should be created', inject([TransactionSourceService], (service: TransactionSourceService) => {
    expect(service).toBeTruthy();
  }));
});
