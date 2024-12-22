import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { DwReportComponent } from '../components/dw-report/dw-report.component';
import { UserDetailsComponent } from '../components/user-details/user-details.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [NgClass,RouterOutlet],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  activeButtonIndex: string = 'today';  // No button is active initially
  isShowcards: boolean = false;

  setActiveButton(type: string) {
    this.activeButtonIndex = type;  // Set the active button by its index
  }
}
