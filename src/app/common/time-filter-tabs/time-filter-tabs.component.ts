import { Component } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';
import moment from 'moment';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { ConditionhandlerService } from '../../services/conditionhandler.service';

@Component({
  selector: 'app-time-filter-tabs',
  imports: [NgClass],
  templateUrl: './time-filter-tabs.component.html',
  styleUrl: './time-filter-tabs.component.scss'
})
export class TimeFilterTabsComponent {
  activeButtonIndex: string = 'today';  // No button is active initially
  isShowcards: boolean = false;

  constructor(private conditionalService:ConditionhandlerService){}

  // setActiveButton(type: string) {
  //   this.activeButtonIndex = type;  // Set the active button by its index
  // }

  // setActiveButton(filter: string) {
  //   this.activeButtonIndex = filter;

  //   const today = moment().startOf('day');
  //   let start: Date;
  //   let end: Date;

  //   switch (filter) {
  //     case 'today':
  //       start = today.toDate();
  //       end = today.toDate();
  //       break;
  //     case 'yesterday':
  //       start = today.subtract(1, 'day').toDate();
  //       end = start;
  //       break;
  //     case 'thisweek':
  //       start = today.startOf('week').toDate();
  //       end = today.endOf('week').toDate();
  //       break;
  //     case 'lastweek':
  //       start = today.subtract(1, 'week').startOf('week').toDate();
  //       end = today.subtract(1, 'week').endOf('week').toDate();
  //       break;
  //     case 'thismonth':
  //       start = today.startOf('month').toDate();
  //       end = today.endOf('month').toDate();
  //       break;
  //     case 'lastmonth':
  //       start = today.subtract(1, 'month').startOf('month').toDate();
  //       end = today.subtract(1, 'month').endOf('month').toDate();
  //       break;
  //     default:
  //       return;
  //   }
    

  //   this.conditionalService.updateDateRange(start, end);
  // }
  setActiveButton(filter: string) {
    this.activeButtonIndex = filter;
  
    const today = moment().startOf('day');
    let start: moment.Moment;
    let end: moment.Moment;
  
    switch (filter) {
      case 'today':
        start = today.clone();
        end = today.clone();
        break;
      case 'yesterday':
        start = today.clone().subtract(1, 'day');
        end = start.clone();
        break;
      case 'thisweek':
        start = today.clone().startOf('week');
        end = today.clone().endOf('week');
        break;
      case 'lastweek':
        start = today.clone().subtract(1, 'week').startOf('week');
        end = today.clone().subtract(1, 'week').endOf('week');
        break;
      case 'thismonth':
        start = today.clone().startOf('month');
        end = today.clone().endOf('month');
        break;
      case 'lastmonth':
        start = today.clone().subtract(1, 'month').startOf('month');
        end = today.clone().subtract(1, 'month').endOf('month');
        break;
      default:
        return;
    }
  
    // Convert start and end to Date objects
    const startDate = start.toDate();
    const endDate = end.toDate();
  }
  
}
