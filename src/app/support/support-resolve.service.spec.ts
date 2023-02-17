import { TestBed } from '@angular/core/testing';

import { SupportResolveService } from './support-resolve.service';

describe('SupportResolveService', () => {
  let service: SupportResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SupportResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
