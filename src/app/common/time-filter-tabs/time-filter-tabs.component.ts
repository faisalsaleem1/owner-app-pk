import { Component } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-time-filter-tabs',
  imports: [NgClass],
  templateUrl: './time-filter-tabs.component.html',
  styleUrl: './time-filter-tabs.component.scss'
})
export class TimeFilterTabsComponent {
  activeButtonIndex: string = 'today';  // No button is active initially
  isShowcards: boolean = false;

  setActiveButton(type: string) {
    this.activeButtonIndex = type;  // Set the active button by its index
  }
}
