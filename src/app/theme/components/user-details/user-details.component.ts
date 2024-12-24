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
      console.log(resp)
      const { currentRoute, date } = resp;
      this.currentPath = currentRoute;
      const { from = null, to = null } = date || {};
      const forStartDate = new Date(from);
      console.log(forStartDate)
      this.startDate = forStartDate;
      console.log(this.startDate)
      const forEndDate = new Date(to);
      this.endDate = forEndDate;
      console.log(this.startDate, this.endDate)
    });
    this.getUsersReport();
  }

  getUsersReport() {
    let payload = {
      startDate: this.conditionhandler.getStartDate(this.startDate),
      endDate: this.conditionhandler.getEndDate(this.endDate),
    };
    this.apiService.getUserReports(payload).subscribe((apiResp) => {
      this.tableContentData = apiResp.data;
    });
  }

  trackByIndex(index: number): number {
    return index;
  }
}
