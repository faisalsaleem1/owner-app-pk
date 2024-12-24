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
  ) {}

  ngOnInit(): void {
    this.conditionhandler.getRangeData().subscribe((resp: any) => {
      console.log(resp, "resp resp resp ");
      const { currentRoute, date } = resp;
      this.currentPath = currentRoute;
      const { from = null, to = null } = date || {};
      this.startDate = from;
      this.endDate = to;
    });
    this.getUsersReport();
  }

  getUsersReport() {
    let payload = {
      startDate: this.conditionhandler.getDateFormat(this.startDate),
      endDate: this.conditionhandler.getDateFormat(this.endDate),
    };
    this.apiService.getUserReports(payload).subscribe((apiResp) => {
      this.tableContentData = apiResp.data;
    });
  }

  trackByIndex(index: number): number {
    return index;
  }
}
