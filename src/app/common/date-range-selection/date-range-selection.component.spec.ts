import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateRangeSelectionComponent } from './date-range-selection.component';

describe('DateRangeSelectionComponent', () => {
  let component: DateRangeSelectionComponent;
  let fixture: ComponentFixture<DateRangeSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DateRangeSelectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DateRangeSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
