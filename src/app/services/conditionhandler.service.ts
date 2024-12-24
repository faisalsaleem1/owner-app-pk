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
  
    // Ensure the local time is preserved
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
  
    const timeZoneOffset = -date.getTimezoneOffset(); // Get offset in minutes
    const offsetHours = String(Math.floor(Math.abs(timeZoneOffset) / 60)).padStart(2, "0");
    const offsetMinutes = String(Math.abs(timeZoneOffset) % 60).padStart(2, "0");
    const offsetSign = timeZoneOffset >= 0 ? "+" : "-";
  
    const formattedDate = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}${offsetSign}${offsetHours}:${offsetMinutes}`;
    console.log(formattedDate);
  
    return formattedDate;
  }
  
}
