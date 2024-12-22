import { Component } from "@angular/core";
import { DateRangeSelectionComponent } from "../date-range-selection/date-range-selection.component";

@Component({
  selector: "app-header",
  imports: [DateRangeSelectionComponent],
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.scss",
})
export class HeaderComponent {
  defaultFrom = new Date();
  defaultTo = new Date(this.defaultFrom.getTime() + 0 * 24 * 60 * 60 * 1000);

  public onDateRangeSelection(range: { from: Date; to: Date }) {
    console.log(`Selected range: ${range.from} - ${range.to}`);
  }
}
