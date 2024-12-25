import { Component, OnInit, effect } from "@angular/core";
import { DateRangeSelectionComponent } from "../date-range-selection/date-range-selection.component";
import { SingleDatepickerComponent } from "../single-datepicker/single-datepicker.component";
import { NgClass, NgIf } from "@angular/common";
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { ConditionhandlerService } from "../../services/conditionhandler.service";


@Component({
  selector: "app-header",
  imports: [DateRangeSelectionComponent,SingleDatepickerComponent,NgIf,RouterLink,RouterLinkActive],
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.scss",
})
export class HeaderComponent implements OnInit{
  header2Active: string = "dashboard";
  isDesktop: any;
  currentRoute: any;

  constructor(
    private router:Router,
    private toastr: ToastrService,
    private conditionHandlerService:ConditionhandlerService
    ){  
    }
  ngOnInit(): void {
    this.conditionHandlerService.getInnerWidth().subscribe((resp: any) => {
      if (resp < 768) {
        this.isDesktop = false;
        console.log(this.isDesktop,'this.isDesktop11');
        
      } else {
        this.isDesktop = true;
        console.log(this.isDesktop,'this.isDesktop22');
      }
    });
    this.currentRoute = this.router.url;
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
      }
    });
  }

  defaultFrom = new Date();
  defaultTo = new Date(this.defaultFrom.getTime() + 0 * 24 * 60 * 60 * 1000);

  public onDateRangeSelection(data:any) {
    console.log(data);
  }
  public receiveSingleDateRanges(data:any){
    console.log(data)
  }
}
