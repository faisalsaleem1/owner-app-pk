import { Component, EventEmitter, HostListener, Input, Output, ViewChild } from '@angular/core';
import { NgbAlertModule, NgbCalendar, NgbDatepickerModule, NgbDateStruct, NgbInputDatepicker } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import moment from 'moment';
@Component({
  selector: 'app-single-datepicker',
  imports: [NgbDatepickerModule, NgbAlertModule, FormsModule, FormsModule,
      ReactiveFormsModule, CommonModule],
  templateUrl: './single-datepicker.component.html',
  styleUrl: './single-datepicker.component.scss'
})
export class SingleDatepickerComponent {
  @ViewChild("startDp") private startDp: NgbInputDatepicker | any;
  @Output() startDateEmit = new EventEmitter<{ start: Date }>();
  startModel!: NgbDateStruct;
  endModel!: NgbDateStruct;
  @Input() start: Date | any = null;
  @Input() end: Date | any = null;
  isStartOpen = false;
  isEndOpen = false;

  @HostListener("document:click", ["$event.target"])
    onClick(element: any) {
      const host = document.getElementById("startDatePicker");
      if (this.startDp && this.isStartOpen && !this.isDescendant(host, element)) {
        this.emit(true);
      }
    }
  constructor(private calender:NgbCalendar){
    this.start = this.start?.getDate()
    this.end = this.end?.getDate()
  }
  private emit(close?: boolean) {
    const date: any = {
      start: this.start,
    };

    this.startDateEmit.emit(date);

    if (close) {
      this.isStartOpen = false;
      this.startDp.close();
    }
  }
  get startFormattedDateRange(): string {
    const startFormatted = moment(this.start).format("dddd, Do MMMM");
    return `${startFormatted} `;
  }
  get endFormattedDateRange(): string {
  const endFormatted = moment(this.end).format("dddd, Do MMMM");
  return `${endFormatted} `;
    }
    private isDescendant(parent: any, child: any) {
      let node = child;
      while (node !== null) {
        if (node === parent) {
          return true;
        } else {
          node = node.parentNode;
        }
      }
      return false;
    }
    toDate(dateStruct: NgbDateStruct): Date | null {
      return dateStruct
        ? new Date(dateStruct.year, dateStruct.month - 1, dateStruct.day)
        : null;
    }
    onStartDateSelect(date: NgbDateStruct){
      this.start = this.toDate(date);
    }
    onEndDateSelect(date: NgbDateStruct){
      this.end = this.toDate(date);
    }
}
