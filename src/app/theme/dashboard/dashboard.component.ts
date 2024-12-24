import { Component } from '@angular/core';
import { TimeFilterTabsComponent } from '../../common/time-filter-tabs/time-filter-tabs.component';
import { DwReportComponent } from "../components/dw-report/dw-report.component";
import { DateRangeSelectionComponent } from "../../common/date-range-selection/date-range-selection.component";


@Component({
  selector: 'app-dashboard',
  imports: [DateRangeSelectionComponent, TimeFilterTabsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  defaultFrom = new Date();
  defaultTo = new Date(this.defaultFrom.getTime() + 0 * 24 * 60 * 60 * 1000);

  public onDateRangeSelection(data:any) {
    console.log(data)
  }
}
