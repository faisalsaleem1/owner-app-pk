import { Component, Input } from '@angular/core';
import { NgbAlertModule, NgbCalendar, NgbDatepickerModule, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
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
  model!: NgbDateStruct;
  @Input() start: Date | null = null;
  @Input() end: Date | null = null;
  constructor(private calender:NgbCalendar){
    
  }
  get startFormattedDateRange(): string {
    const startFormatted = moment(this.start).format("dddd, Do MMMM");
    return `${startFormatted} `;
  }
  get endFormattedDateRange(): string {
  const endFormatted = moment(this.end).format("dddd, Do MMMM");
  return `${endFormatted} `;
    }
}
