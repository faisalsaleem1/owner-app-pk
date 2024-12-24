import { Injectable } from '@angular/core';
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


}



