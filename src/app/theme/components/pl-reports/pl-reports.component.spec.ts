import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlReportsComponent } from './pl-reports.component';

describe('PlReportsComponent', () => {
  let component: PlReportsComponent;
  let fixture: ComponentFixture<PlReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlReportsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
