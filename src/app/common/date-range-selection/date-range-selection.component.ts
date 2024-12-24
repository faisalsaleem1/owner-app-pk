import { CommonModule } from "@angular/common";
import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
  ViewChild,
} from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NavigationEnd, Router } from "@angular/router";
import {
  NgbDateStruct,
  NgbInputDatepicker,
  NgbDatepickerModule,
} from "@ng-bootstrap/ng-bootstrap";
import moment from "moment";
import { ApiService } from "../../services/api.service";
import { ConditionhandlerService } from "../../services/conditionhandler.service";

@Component({
  selector: "app-date-range-selection",
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    NgbDatepickerModule,
  ],
  templateUrl: "./date-range-selection.component.html",
  styleUrl: "./date-range-selection.component.scss",
})
export class DateRangeSelectionComponent implements OnInit {
  @ViewChild("dp") private datePicker: NgbInputDatepicker | any;
  @Input() from: Date | null = null;
  @Input() to: Date | null = null;
  @Input() placeholder = "starting today";
  currentRoute!:string;

  @Output() dateRangeSelection = new EventEmitter<{ date:{from: Date; to: Date},currentRoute:string }>();

  hoveredDate: Date | null = null;
  isOpen = false;

  

  @HostListener("document:click", ["$event.target"])
  onClick(element: any) {
    const host = document.getElementById("dateRangePicker");
    if (this.datePicker && this.isOpen && !this.isDescendant(host, element)) {
      this.emit(true);
    }
  }

  get formattedDateRange(): string {
    if (!this.from) {
      return "please select valid date"; // Default message if no start date is selected
    }

    // const fromFormatted = moment(this.from).format('DD.MM.YYYY');
    const fromFormatted = moment(this.from).format("dddd, Do MMMM");
    return this.to
      ? // ? `${fromFormatted} - ${moment(this.to).format('DD.MM.YYYY')}`
        `${fromFormatted} - ${moment(this.to).format("dddd, Do MMMM")}`
      : `${fromFormatted}`;
  }

  constructor(private router:Router, private conditionhandler: ConditionhandlerService) {
    
  }

  ngOnInit() {
    this.currentRoute = this.router.url;
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.urlAfterRedirects;
      }
    });
    const dateRange: any = {
      date:{
        from: new Date(),
        to: new Date(),
      },
      currentRoute: this.currentRoute
    };
    this.conditionhandler.setRangeData(dateRange)
  }

  private emit(close?: boolean) {
    const dateRange: any = {
      date:{
        from: this.from,
        to: this.to,
      },
      currentRoute: this.currentRoute
    };

    this.conditionhandler.setRangeData(dateRange)

    this.dateRangeSelection.emit(dateRange);

    if (close) {
      this.isOpen = false;
      this.datePicker.close();
    }
  }

  // When a date is selected
  onDateSelection(date: NgbDateStruct) {
    if (!this.from && !this.to) {
      this.from = this.toDate(date);
    } else if (
      this.from &&
      !this.to &&
      this.toMoment(date).isAfter(this.from)
    ) {
      this.to = this.toDate(date);
    } else {
      this.to = null;
      this.from = this.toDate(date);
    }
  }

  // Called when Cancel button is clicked
  onCancel() {
    this.from = null;
    this.to = null;
    this.datePicker.close();
    this.isOpen = false;
  }

  // Called when Apply button is clicked
  onChoose() {
    this.emit(true);
  }

  toDate(dateStruct: NgbDateStruct): Date | null {
    return dateStruct
      ? new Date(dateStruct.year, dateStruct.month - 1, dateStruct.day)
      : null;
  }

  toMoment(dateStruct: NgbDateStruct): moment.Moment {
    return moment(this.toDate(dateStruct));
  }
  isHovered = (date: NgbDateStruct) =>
    this.from &&
    !this.to &&
    this.hoveredDate &&
    this.toMoment(date).isAfter(this.from) &&
    this.toMoment(date).isBefore(this.hoveredDate);

  isInside = (date: NgbDateStruct) =>
    this.toMoment(date).isAfter(moment(this.from).startOf("day")) &&
    this.toMoment(date).isBefore(moment(this.to).startOf("day"));

  isFrom = (date: NgbDateStruct) => this.toMoment(date).isSame(this.from, "d");
  isTo = (date: NgbDateStruct) => this.toMoment(date).isSame(this.to, "d");

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
}
