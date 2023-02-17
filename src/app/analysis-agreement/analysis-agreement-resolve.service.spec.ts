import { TestBed } from '@angular/core/testing';

import { AnalysisAgreementResolveService } from './analysis-agreement-resolve.service';

describe('AnalysisAgreementResolveService', () => {
  let service: AnalysisAgreementResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnalysisAgreementResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
