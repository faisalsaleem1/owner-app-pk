import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { TimeFilterTabsComponent } from '../../../common/time-filter-tabs/time-filter-tabs.component';
import { ApiService } from '../../../services/api.service';
import { ConditionhandlerService } from '../../../services/conditionhandler.service';

@Component({
  selector: 'app-bet-reports',
  imports: [NgFor, TimeFilterTabsComponent],
  templateUrl: './bet-reports.component.html',
  styleUrl: './bet-reports.component.scss'
})
export class BetReportsComponent {
  betReports: any = [];
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
      this.getBetReport();
    }
  
    getBetReport() {
      let payload = {
        startDate: this.startDate,
        endDate: this.endDate,
      };
      this.apiService.getBetReports(payload).subscribe((apiResp) => {
        this.tableContentData = apiResp.data;
      });
    }
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
