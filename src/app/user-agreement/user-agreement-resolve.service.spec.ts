import { TestBed } from '@angular/core/testing';

import { UserAgreementResolveService } from './user-agreement-resolve.service';

describe('UserAgreementResolveService', () => {
  let service: UserAgreementResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserAgreementResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
