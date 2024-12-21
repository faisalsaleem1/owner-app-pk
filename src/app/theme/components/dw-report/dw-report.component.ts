import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dw-report',
  imports: [NgClass,NgIf],
  templateUrl: './dw-report.component.html',
  styleUrl: './dw-report.component.scss'
})
export class DwReportComponent {
  isShowcards: boolean = false;
}
