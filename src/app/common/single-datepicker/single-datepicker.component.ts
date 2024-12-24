import { Component, EventEmitter, HostListener, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgbAlertModule, NgbCalendar, NgbDatepickerModule, NgbDateStruct, NgbInputDatepicker } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import moment from 'moment';
import { NavigationEnd, Router } from '@angular/router';
@Component({
  selector: 'app-single-datepicker',
  imports: [NgbDatepickerModule, NgbAlertModule, FormsModule, FormsModule,
      ReactiveFormsModule, CommonModule],
  templateUrl: './single-datepicker.component.html',
  styleUrl: './single-datepicker.component.scss'
})
export class SingleDatepickerComponent implements OnInit {
  @ViewChild("startDp") private startDp: NgbInputDatepicker | any;
  @Output() rangeDateEmit = new EventEmitter<{ date:{startDate:any,endDate:any},currentPath:string }>();
  startModel!: NgbDateStruct;
  endModel!: NgbDateStruct;
  @Input() start: Date | any;
  @Input() end: Date | any;
  isStartOpen = false;
  isEndOpen = false;
  currentRoute!:string;

  @HostListener("document:click", ["$event.target"])
    onClick(element: any) {
      const host = document.getElementById("startDatePicker");
      if (this.startDp && this.isStartOpen && !this.isDescendant(host, element)) {
        this.emit(true);
      }
    }
  constructor(private calender:NgbCalendar, private router:Router){
    this.start = new Date()
    this.end = new Date()
  }
  ngOnInit(): void {
    console.log(this.start)
    this.currentRoute = this.router.url;
        this.router.events.subscribe((event) => {
          if (event instanceof NavigationEnd) {
            this.currentRoute = event.urlAfterRedirects;
          }
        });
  }
  private emit(close?: boolean) {
    const date: any = {
      start: this.start,
    };

    

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
      const rangeData={
        date:{
          startDate:this.start,
          endDate:this.end
        },
        currentPath:this.currentRoute
      }
      

    }
    onEndDateSelect(date: NgbDateStruct){
      this.end = this.toDate(date);
      const rangeData={
        date:{
          startDate:this.start,
          endDate:this.end
        },
        currentPath:this.currentRoute
      }
      this.rangeDateEmit.emit(rangeData)
    }
}
