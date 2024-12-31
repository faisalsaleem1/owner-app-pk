import { NgClass, NgFor } from "@angular/common";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { TimeFilterTabsComponent } from "../../../common/time-filter-tabs/time-filter-tabs.component";
import { ApiService } from "../../../services/api.service";
import { ConditionhandlerService } from "../../../services/conditionhandler.service";
import { Subscription } from "rxjs";
import { Config } from "datatables.net";
import { DataTablesModule } from "angular-datatables";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-bet-reports",
  imports: [
    NgFor,
    TimeFilterTabsComponent,
    NgClass,
    DataTablesModule,
    FormsModule,
  ],
  templateUrl: "./bet-reports.component.html",
  styleUrl: "./bet-reports.component.scss",
})
export class BetReportsComponent implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription();
  dtOptions: Config = {};

  betReports: any = [];
  startDate: any;
  endDate: any;
  currentPath: any;
  tableContentData: any[] | any;
  searchQuery: string = "";
  filteredData: any[] = [];

  tableHeaderData: string[] = [
    "Sports Name",
    "Company Name",
    // "Settle",
    // "UnSettle",
    // "Void",
    // "Rejected",
    "settle Bets",
    "settle Bets Stake",
    "void Bets",
    "void Bets Stake",
    "sportId",
    "Created At",
    "Updated At",
    "Start Date",
    "End Date",
    "Environment",
    "Market Type",
  ];
  originalData: any[] = [];

  constructor(
    private apiService: ApiService,
    private conditionhandler: ConditionhandlerService
  ) {}

  ngOnInit(): void {
    const sub = this.conditionhandler.getRangeData().subscribe((resp: any) => {
      console.log(resp, "resp resp resp ");
      const { currentRoute, date } = resp;
      this.currentPath = currentRoute;
      const { from = null, to = null } = date || {};
      this.startDate = from;
      this.endDate = to;
      if (this.startDate && this.endDate) {
        this.getBetReport();
      }
    });
    this.subscription.add(sub);
  }

  getBetReport() {
    console.log(this.startDate, "11111111");
    console.log(this.endDate, "222222222");

    let payload = {
      startDate: this.conditionhandler.getDateFormat(this.startDate),
      endDate: this.conditionhandler.getDateFormat(this.endDate),
    };

    this.apiService.getBetReports(payload).subscribe((apiResp) => {
      if (apiResp.data.length > 0) {
        this.tableContentData = apiResp.data;
        // Calculate totals
        const totals = apiResp.data.reduce(
          (acc: any, row: any) => {
            acc.settleBets += Math.round(row.settleBets || 0); // Rounding off values
            acc.settleBetsStake += Math.round(row.settleBetsStake || 0); // Rounding off values
            acc.voidBets += Math.round(row.voidBets || 0); // Rounding off values
            acc.voidBetsStake += Math.round(row.voidBetsStake || 0); // Rounding off values
            return acc;
          },
          {
            settleBets: 0,
            settleBetsStake: 0,
            voidBets: 0,
            voidBetsStake: 0,
          }
        );
        // Add the total row
        apiResp.data.push({
          sportName: "TOTAL",
          companyName: "",
          settleBets: totals.settleBets,
          settleBetsStake: totals.settleBetsStake,
          voidBets: totals.voidBets,
          voidBetsStake: totals.voidBetsStake,
        });
        // Log the updated array
        // console.log(apiResp.data);
        this.tableContentData = apiResp.data;
        this.originalData = [...this.tableContentData];
      }
    });
  }

  filterTable(): void {
    const query = this.searchQuery.toLowerCase();
    console.log(query.length, "query query query");

    if (query.length > 0) {
      this.filteredData = this.originalData.filter(
        (data: any) =>
          data.sportName.toLowerCase().includes(query) ||
          data.companyName.toLowerCase().includes(query)
      );
      this.tableContentData = this.filteredData;

      // Calculate totals
      const totals = this.tableContentData.reduce(
        (acc: any, row: any) => {
          acc.settleBets += Math.round(row.settleBets || 0); // Rounding off values
          acc.settleBetsStake += Math.round(row.settleBetsStake || 0); // Rounding off values
          acc.voidBets += Math.round(row.voidBets || 0); // Rounding off values
          acc.voidBetsStake += Math.round(row.voidBetsStake || 0); // Rounding off values
          return acc;
        },
        {
          settleBets: 0,
          settleBetsStake: 0,
          voidBets: 0,
          voidBetsStake: 0,
        }
      );

      // Add the total row
      this.tableContentData.push({
        sportName: "TOTAL",
        companyName: "",
        settleBets: totals.settleBets,
        settleBetsStake: totals.settleBetsStake,
        voidBets: totals.voidBets,
        voidBetsStake: totals.voidBetsStake,
      });
    } else {
      // Revert back to the original data
      this.tableContentData = [...this.originalData];
    }
  }

  trackByIndex(index: number): number {
    return index;
  }

  ngOnDestroy() {
    // Unsubscribe from all subscriptions
    this.subscription.unsubscribe();
  }
}
