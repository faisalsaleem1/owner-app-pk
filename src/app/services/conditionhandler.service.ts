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
  private isFindUserDiffrence: BehaviorSubject<any | null> =
    new BehaviorSubject<any | null>(false);
  private isRefreshDiffrence: BehaviorSubject<any | null> =
    new BehaviorSubject<any | null>(false);

  constructor() {}

  getRefreshDiffrence(): BehaviorSubject<any | null> {
    return this.isRefreshDiffrence;
  }

  setRefreshDiffrence(value: any | null): void {
    this.isRefreshDiffrence.next(value);
  }

  getFindUserDiffrence(): BehaviorSubject<any | null> {
    return this.isFindUserDiffrence;
  }

  setFindUserDiffrence(value: any | null): void {
    this.isFindUserDiffrence.next(value);
  }

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
    // const date = new Date(dateStr);    
    // console.log("Input dateStr:", dateStr);

    const defaultDate = new Date(); // Current date and time
    const date = dateStr ? new Date(dateStr) : defaultDate;
  
    if (isNaN(date.getTime())) {
      console.error("Invalid date:", dateStr);
      return null;
    }

    // Ensure the local time is preserved
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    const timeZoneOffset = -date.getTimezoneOffset(); // Get offset in minutes
    const offsetHours = String(
      Math.floor(Math.abs(timeZoneOffset) / 60)
    ).padStart(2, "0");
    const offsetMinutes = String(Math.abs(timeZoneOffset) % 60).padStart(
      2,
      "0"
    );
    const offsetSign = timeZoneOffset >= 0 ? "+" : "-";

    const formattedDate = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}${offsetSign}${offsetHours}:${offsetMinutes}`;
    console.log(formattedDate);

    return formattedDate;
  }
}
