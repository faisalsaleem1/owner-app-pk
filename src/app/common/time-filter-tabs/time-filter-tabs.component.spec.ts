import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeFilterTabsComponent } from './time-filter-tabs.component';

describe('TimeFilterTabsComponent', () => {
  let component: TimeFilterTabsComponent;
  let fixture: ComponentFixture<TimeFilterTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimeFilterTabsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeFilterTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
