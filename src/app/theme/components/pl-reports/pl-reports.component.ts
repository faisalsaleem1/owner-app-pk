import { Component } from '@angular/core';
import { TimeFilterTabsComponent } from '../../../common/time-filter-tabs/time-filter-tabs.component';
import { NgFor } from '@angular/common';
import { ApiService } from '../../../services/api.service';
import { ConditionhandlerService } from '../../../services/conditionhandler.service';

@Component({
  selector: 'app-pl-reports',
  imports: [NgFor, TimeFilterTabsComponent],
  templateUrl: './pl-reports.component.html',
  styleUrl: './pl-reports.component.scss'
})
export class PlReportsComponent {
  plReport: any = [];
  startDate: any;
  endDate: any;
  currentPath: any;

  constructor(
      private apiService: ApiService,
      private conditionhandler: ConditionhandlerService
    ) {}
  
    ngOnInit(): void {
      this.conditionhandler.getRangeData().subscribe((resp: any) => {
        const { currentRoute, date } = resp;
        this.currentPath = currentRoute;
        const { from = null, to = null } = date || {};
        const forStartDate = new Date(from);
        this.startDate = forStartDate.toISOString();
        const forEndDate = new Date(to);
        this.endDate = forEndDate.toISOString();
      });
      this.getPlReport();
    }
  
    getPlReport() {
      let payload = {
        startDate: this.startDate,
        endDate: this.endDate,
      };
      this.apiService.getPlReports(payload).subscribe((apiResp) => {
        this.tableContentData = apiResp.data;
      });
    }
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
