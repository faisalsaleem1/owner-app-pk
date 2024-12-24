import { Injectable } from '@angular/core';
import moment from 'moment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConditionhandlerService {
  private isInnerWidth: BehaviorSubject<any | null> = new BehaviorSubject<any | null>(null);
  private rangeSelectionData : BehaviorSubject<any> = new BehaviorSubject({});

  constructor() { }

  getInnerWidth(): BehaviorSubject<any | null> {
    return this.isInnerWidth;
  }

  setInnerWidth(value: any | null): void {
    this.isInnerWidth.next(value);
  }

  getRangeData():BehaviorSubject<any>{
    return this.rangeSelectionData
  }

  setRangeData(data:any):void{
    this.rangeSelectionData.next(data)
  }

  getStartDate(date: any) {
    if (!date) {
      date = { year: new Date().getFullYear(), month: 1, day: 1 };
    }
    const year = date?.year || date?.date?.year;
    const month = date?.month || date?.date?.month;
    const day = date?.day || date?.date?.day;
  
    const startDate = new Date(year, month - 1, day);
    // Use moment to format the date with timezone offset
    const formattedStartDate = moment(startDate).format('YYYY-MM-DDTHH:mm:ssZ');
    // Replace the 'Z' with '+00:00' to match the desired output
    const modifiedStartDate = formattedStartDate.replace('Z', '+00:00');
    return modifiedStartDate;
  }
  getEndDate(date: any) {
    if (!date) {
      date = { year: new Date().getFullYear(), month: 1, day: 1 };
    }

    const year = date?.year || date?.date?.year;
  const month = date?.month || date?.date?.month;
  const day = date?.day || date?.date?.day;

  const endDate = new Date(year, month - 1, day);

    // Set the time to 23:59:00
    endDate.setHours(23, 59, 0, 0);
    const formattedEndDate = moment(endDate).format('YYYY-MM-DDTHH:mm:ssZ');

    return formattedEndDate;
  }


}



