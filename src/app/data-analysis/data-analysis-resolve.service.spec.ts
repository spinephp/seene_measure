import { TestBed } from '@angular/core/testing';

import { DataAnalysisResolveService } from './data-analysis-resolve.service';

describe('DataAnalysisResolveService', () => {
  let service: DataAnalysisResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataAnalysisResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
