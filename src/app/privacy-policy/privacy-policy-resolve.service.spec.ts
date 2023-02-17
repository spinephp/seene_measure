import { TestBed } from '@angular/core/testing';

import { PrivacyPolicyResolveService } from './privacy-policy-resolve.service';

describe('PrivacyPolicyResolveService', () => {
  let service: PrivacyPolicyResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrivacyPolicyResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
