import { NgClass, NgFor, NgIf } from "@angular/common";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { ApiService } from "../../../services/api.service";
import { ConditionhandlerService } from "../../../services/conditionhandler.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-user-details",
  imports: [NgFor, NgClass],
  templateUrl: "./user-details.component.html",
  styleUrl: "./user-details.component.scss",
})
export class UserDetailsComponent implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription();

  usersReport: any = [];
  startDate: any;
  endDate: any;
  currentPath: any;
  tableContentData: any[] | any;

  tableHeaderData: string[] = [
    "Company Name",
    "Admins",
    "W/L",
    "Supers",
    "Masters",
    "Agents",
    "Users",
  ];

  constructor(
    private apiService: ApiService,
    private conditionhandler: ConditionhandlerService
  ) {
    const sub = this.conditionhandler
      .getFindUserDiffrence()
      .subscribe((resp: any) => {
        if (resp) {
          this.findDiffrence();
        }
      });
    this.subscription.add(sub);

    const sub1 = this.conditionhandler
      .getRefreshDiffrence()
      .subscribe((resp: any) => {
        if (resp) {
          this.getUsersReport();
        }
      });
    this.subscription.add(sub1);
  }

  ngOnInit(): void {
    const sub = this.conditionhandler.getRangeData().subscribe((resp: any) => {
      console.log(resp, "resp resp resp ");
      const { currentRoute, date } = resp;
      this.currentPath = currentRoute;
      const { from = null, to = null } = date || {};
      this.startDate = from;
      this.endDate = to;
      // if (this.startDate && this.endDate) this.getUsersReport();
    });
    this.subscription.add(sub);
    this.getUsersReport();
  }

  getUsersReport() {
    console.log(this.startDate, "11111111");
    console.log(this.endDate, "222222222");

    let payload = {
      startDate: this.conditionhandler.getDateFormat(this.startDate),
      endDate: this.conditionhandler.getDateFormat(this.endDate),
    };
    this.apiService.getUserReports(payload).subscribe((apiResp) => {
      console.log(apiResp.data, "apiResp.data;");

      // Calculate totals
      const totals = apiResp.data.reduce(
        (acc: any, row: any) => {
          acc.admins += row.admins || 0;
          acc.agents += row.agents || 0;
          acc.masters += row.masters || 0;
          acc.supers += row.supers || 0;
          acc.users += row.users || 0;
          acc.whiteLabels += row.whiteLabels || 0;
          return acc;
        },
        {
          admins: 0,
          agents: 0,
          masters: 0,
          supers: 0,
          users: 0,
          whiteLabels: 0,
        }
      );

      // Add the total row
      apiResp.data.push({
        companyName: "TOTAL",
        admins: totals.admins,
        agents: totals.agents,
        masters: totals.masters,
        supers: totals.supers,
        users: totals.users,
        whiteLabels: totals.whiteLabels,
        createdAt: null,
        updatedAt: null,
        environment: null,
      });
      // Log the updated array
      console.log(apiResp.data);
      this.tableContentData = apiResp.data;
    });
    this.conditionhandler.setRefreshDiffrence(false);
  }

  trackByIndex(index: number): number {
    return index;
  }

  findDiffrence() {
    this.apiService.getCompareUsersReports().subscribe((apiResp: any) => {
      this.conditionhandler.setFindUserDiffrence(false);

      // Calculate totals
      const totals = apiResp.data.reduce(
        (acc: any, row: any) => {
          acc.admins += row.admins || 0;
          acc.agents += row.agents || 0;
          acc.masters += row.masters || 0;
          acc.supers += row.supers || 0;
          acc.users += row.users || 0;
          acc.whiteLabels += row.whiteLabels || 0;
          return acc;
        },
        {
          admins: 0,
          agents: 0,
          masters: 0,
          supers: 0,
          users: 0,
          whiteLabels: 0,
        }
      );

      // Add the total row
      apiResp.data.push({
        companyName: "TOTAL",
        admins: totals.admins,
        agents: totals.agents,
        masters: totals.masters,
        supers: totals.supers,
        users: totals.users,
        whiteLabels: totals.whiteLabels,
        createdAt: null,
        updatedAt: null,
        environment: null,
      });
      // Log the updated array
      console.log(apiResp.data);
      this.tableContentData = apiResp.data;
      this.tableContentData = apiResp.data;
    });
  }

  ngOnDestroy() {
    // Unsubscribe from all subscriptions
    this.subscription.unsubscribe();
  }
}
