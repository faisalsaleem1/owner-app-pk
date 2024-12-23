import { Component } from '@angular/core';
import { TimeFilterTabsComponent } from '../../../common/time-filter-tabs/time-filter-tabs.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-pl-reports',
  imports: [NgFor, TimeFilterTabsComponent],
  templateUrl: './pl-reports.component.html',
  styleUrl: './pl-reports.component.scss'
})
export class PlReportsComponent {
  tableHeaderData: string[] = [
    'Sports Name',
    'Company Name',
    '20/12/2024',
    '20/12/2024',
    '20/12/2024',
  ];

  // Table content data
  tableContentData: any[] = [
    {
      sportsName: 'Cricket',
      companyName: 'T10Exchnage',
      date1: '10',
      date2: '10',
      date3: '10',
    },
    {
      sportsName: 'Cricket',
      companyName: 'T10Exchnage',
      date1: '10',
      date2: '10',
      date3: '10',
    }, 
    {
      sportsName: 'Cricket',
      companyName: 'T10Exchnage',
      date1: '10',
      date2: '10',
      date3: '10',
    },
  ];

  trackByIndex(index: number): number {
    return index;
  }
}
