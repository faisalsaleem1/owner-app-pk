import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [NgClass,NgIf],
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
