import { NgFor } from "@angular/common";
import { Component } from "@angular/core";
import { TimeFilterTabsComponent } from "../../../common/time-filter-tabs/time-filter-tabs.component";
import { ApiService } from "../../../services/api.service";
import { ConditionhandlerService } from "../../../services/conditionhandler.service";

@Component({
  selector: "app-bet-reports",
  imports: [NgFor, TimeFilterTabsComponent],
  templateUrl: "./bet-reports.component.html",
  styleUrl: "./bet-reports.component.scss",
})
export class BetReportsComponent {
  betReports: any = [];
  startDate: any;
  endDate: any;
  currentPath: any;
  tableContentData: any[] | any;

  tableHeaderData: string[] = [
    "Sports Name",
    "Company Name",
    "Settle",
    "UnSettle",
    "Void",
    "Rejected",
  ];

  constructor(
    private apiService: ApiService,
    private conditionhandler: ConditionhandlerService
  ) {}

  ngOnInit(): void {
    this.conditionhandler.getRangeData().subscribe((resp: any) => {
      console.log(resp, "resp resp resp ");
      const { currentRoute, date } = resp;
      this.currentPath = currentRoute;
      const { from = null, to = null } = date || {};
      this.startDate = from;
      this.endDate = to;
      if(this.startDate && this.endDate) this.getBetReport();
    });
  }

  getBetReport() {
    console.log(this.startDate, '11111111');
    console.log(this.endDate, '222222222');
    
    let payload = {
      startDate: this.conditionhandler.getDateFormat(this.startDate),
      endDate: this.conditionhandler.getDateFormat(this.endDate),
    };

    this.apiService.getBetReports(payload).subscribe((apiResp) => {
      this.tableContentData = apiResp.data;
    });
  }

  trackByIndex(index: number): number {
    return index;
  }
}
