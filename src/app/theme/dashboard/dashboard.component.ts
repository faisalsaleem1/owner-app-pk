import { Component } from '@angular/core';
import { TimeFilterTabsComponent } from '../../common/time-filter-tabs/time-filter-tabs.component';


@Component({
  selector: 'app-dashboard',
  imports: [TimeFilterTabsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {


}
