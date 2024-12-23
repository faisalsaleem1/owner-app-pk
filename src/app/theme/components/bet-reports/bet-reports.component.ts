import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { TimeFilterTabsComponent } from '../../../common/time-filter-tabs/time-filter-tabs.component';

@Component({
  selector: 'app-bet-reports',
  imports: [NgFor, TimeFilterTabsComponent],
  templateUrl: './bet-reports.component.html',
  styleUrl: './bet-reports.component.scss'
})
export class BetReportsComponent {
  tableHeaderData: string[] = [
    'Sports Name',
    'Company Name',
    'Settle',
    'UnSettle',
    'Viod',
    'Rejected',
  ];

  // Table content data
  tableContentData: any[] = [
    {
      sportsName: 'Cricket',
      companyName: 'T10Exchnage',
      settle: '10',
      unSettle: '10',
      viod: '10',
      rejected:'10',
    },
    {
      sportsName: 'Cricket',
      companyName: 'T10Exchnage',
      settle: '10',
      unSettle: '10',
      viod: '10',
      rejected:'10',
    },
    {
      sportsName: 'Cricket',
      companyName: 'T10Exchnage',
      settle: '10',
      unSettle: '10',
      viod: '10',
      rejected:'10',
    },
  ];

  trackByIndex(index: number): number {
    return index;
  }
}
