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
    'Company Name',
    'Admins',
    'W/L',
    'Supers',
    'Masters',
    'Agents',
    'Users',
  ];

  // Table content data
  tableContentData: any[] = [
    {
      companyName: 'T10Exchnage',
      admins: 'Cricket',
      wl: '10',
      supers: '10',
      masters: '10',
      agents:'10',
      users:'10'
    },
    {
      companyName: 'T10Exchnage',
      admins: 'Cricket',
      wl: '10',
      supers: '10',
      masters: '10',
      agents:'10',
      users:'10'
    },
    {
      companyName: 'T10Exchnage',
      admins: 'Cricket',
      wl: '10',
      supers: '10',
      masters: '10',
      agents:'10',
      users:'10'
    },
  ];

  trackByIndex(index: number): number {
    return index;
  }
}
