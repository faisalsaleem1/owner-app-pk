import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ConditionhandlerService } from './services/conditionhandler.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  constructor(private conditionHandlerService:ConditionhandlerService){}

  ngOnInit(): void {
    this.conditionHandlerService.setInnerWidth(window.innerWidth);
  }
  
  title = 'owner-web-app';
}
