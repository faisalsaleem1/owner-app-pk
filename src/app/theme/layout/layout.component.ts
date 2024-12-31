import { Component, OnInit } from "@angular/core";
import { HomeComponent } from "../home/home.component";
import { SidebarComponent } from "../../shared/sidebar/sidebar.component";
import { RouterOutlet } from "@angular/router";
import { HeaderComponent } from "../../common/header/header.component";
import { TimeFilterTabsComponent } from "../../common/time-filter-tabs/time-filter-tabs.component";
import { NgClass } from "@angular/common";

@Component({
  selector: "app-layout",
  imports: [SidebarComponent, RouterOutlet, HeaderComponent,NgClass],
  templateUrl: "./layout.component.html",
  styleUrl: "./layout.component.scss",
})
export class LayoutComponent implements OnInit{
  isIPhoneSafariUser: any;
  ngOnInit(): void {
  this.getUserSpecificAgent();
  }
  getUserSpecificAgent() {
    const userAgent = window.navigator.userAgent;
    this.isIPhoneSafariUser = userAgent.includes("iPhone") && !userAgent.includes("CriOS");
    
  }
}
