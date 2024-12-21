import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-details',
  imports: [NgFor],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent {

  tableHeaderData: string[] = [
    'Sports Name',
    'Company Name',
    'Settle',
    'Unsettle',
    'Void',
    'Rejected',
  ];

  // Table content data
  tableContentData: any[] = [
    {
      sportname: 'Cricket',
      companyName: 'T10Exchnage',
      settle: '10',
      unsettle: '10',
      void: '10',
      rejected:'10'
    },
    {
      sportname: 'Soccer',
      companyName: 'T10Exchnage',
      settle: '10',
      unsettle: '10',
      void: '10',
      rejected:'10'
    },
    {
      sportname: 'Tennis',
      companyName: 'T10Exchnage',
      settle: '10',
      unsettle: '10',
      void: '10',
      rejected:'10'
    },
  ];

  trackByIndex(index: number): number {
    return index;
  }
}
