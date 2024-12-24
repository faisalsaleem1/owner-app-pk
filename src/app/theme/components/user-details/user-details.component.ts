import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { ConditionhandlerService } from '../../../services/conditionhandler.service';

@Component({
  selector: 'app-user-details',
  imports: [NgFor],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent implements OnInit{
  usersReport:any=[];
  res={}
  startDate:any;
  endDate:any;
  constructor(private apiService : ApiService, private conditionhandler: ConditionhandlerService){}

  ngOnInit(): void {
    this.conditionhandler.getRangeData().subscribe((data)=>{
      this.res=data;
      console.log(this.res, 'this.res');
      
    })
    this.getUsersReport()
  }

  getUsersReport(){
    this.apiService.getUserReports(this.res).subscribe((data)=>{
      console.log(data)
    })
  }

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
