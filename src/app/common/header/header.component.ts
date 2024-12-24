import { Component } from "@angular/core";
import { DateRangeSelectionComponent } from "../date-range-selection/date-range-selection.component";
import { SingleDatepickerComponent } from "../single-datepicker/single-datepicker.component";

@Component({
  selector: "app-header",
  imports: [DateRangeSelectionComponent,SingleDatepickerComponent],
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.scss",
})
export class HeaderComponent {
  defaultFrom = new Date();
  defaultTo = new Date(this.defaultFrom.getTime() + 0 * 24 * 60 * 60 * 1000);

  public onDateRangeSelection(data:any) {
    console.log(data);
  }
  public receiveSingleDateRanges(data:any){
    console.log(data)
  }
}
