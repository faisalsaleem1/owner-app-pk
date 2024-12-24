import { NgFor, NgIf } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { ApiService } from "../../../services/api.service";
import { ConditionhandlerService } from "../../../services/conditionhandler.service";

@Component({
  selector: "app-user-details",
  imports: [NgFor],
  templateUrl: "./user-details.component.html",
  styleUrl: "./user-details.component.scss",
})
export class UserDetailsComponent implements OnInit {
  usersReport: any = [];
  startDate: any;
  endDate: any;
  currentPath: any;
  tableContentData: any[] | any;

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
    this.getUsersReport();
  }

  getUsersReport() {
    let payload = {
      startDate: this.startDate,
      endDate: this.endDate,
    };
    this.apiService.getUserReports(payload).subscribe((apiResp) => {
      this.tableContentData = apiResp.data;
    });
  }

  tableHeaderData: string[] = [
    "Company Name",
    "Admins",
    "W/L",
    "Supers",
    "Masters",
    "Agents",
    "Users",
  ];

  // Table content data
  // tableContentData: any[] = [
  //   {
  //     companyName: "T10Exchnage",
  //     admins: "Cricket",
  //     wl: "10",
  //     supers: "10",
  //     masters: "10",
  //     agents: "10",
  //     users: "10",
  //   },
  //   {
  //     companyName: "T10Exchnage",
  //     admins: "Cricket",
  //     wl: "10",
  //     supers: "10",
  //     masters: "10",
  //     agents: "10",
  //     users: "10",
  //   },
  //   {
  //     companyName: "T10Exchnage",
  //     admins: "Cricket",
  //     wl: "10",
  //     supers: "10",
  //     masters: "10",
  //     agents: "10",
  //     users: "10",
  //   },
  // ];

  trackByIndex(index: number): number {
    return index;
  }
}
