import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DwReportComponent } from './dw-report.component';

describe('DwReportComponent', () => {
  let component: DwReportComponent;
  let fixture: ComponentFixture<DwReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DwReportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DwReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
