import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisAgreementComponent } from './analysis-agreement.component';

describe('AnalysisAgreementComponent', () => {
  let component: AnalysisAgreementComponent;
  let fixture: ComponentFixture<AnalysisAgreementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalysisAgreementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalysisAgreementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
