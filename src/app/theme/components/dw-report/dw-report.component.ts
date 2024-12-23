import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { TimeFilterTabsComponent } from '../../../common/time-filter-tabs/time-filter-tabs.component';

@Component({
  selector: 'app-dw-report',
  imports: [NgClass, NgIf, TimeFilterTabsComponent],
  templateUrl: './dw-report.component.html',
  styleUrl: './dw-report.component.scss'
})
export class DwReportComponent {
  isShowcards: boolean = false;
}
