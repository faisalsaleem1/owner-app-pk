import { Injectable } from "@angular/core";
import moment from "moment";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ConditionhandlerService {
  private isInnerWidth: BehaviorSubject<any | null> = new BehaviorSubject<
    any | null
  >(null);
  private rangeSelectionData: BehaviorSubject<any> = new BehaviorSubject({});

  constructor() {}

  getInnerWidth(): BehaviorSubject<any | null> {
    return this.isInnerWidth;
  }

  setInnerWidth(value: any | null): void {
    this.isInnerWidth.next(value);
  }

  getRangeData(): BehaviorSubject<any> {
    return this.rangeSelectionData;
  }

  setRangeData(data: any): void {
    this.rangeSelectionData.next(data);
  }

  getDateFormat(dateStr: any) {
    const date = new Date(dateStr);
    // Format the date to ISO 8601 with timezone offset
    const localISO = date.toISOString().slice(0, -1); // Remove the trailing 'Z'
    const timeZoneOffset = -date.getTimezoneOffset(); // Get offset in minutes
    const offsetHours = String(
      Math.floor(Math.abs(timeZoneOffset) / 60)
    ).padStart(2, "0");
    const offsetMinutes = String(Math.abs(timeZoneOffset) % 60).padStart(
      2,
      "0"
    );
    const offsetSign = timeZoneOffset >= 0 ? "+" : "-";
    const formattedDate = `${localISO}${offsetSign}${offsetHours}:${offsetMinutes}`;
    console.log(formattedDate);

    return formattedDate;
  }
}
