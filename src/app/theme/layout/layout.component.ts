import { Component } from "@angular/core";
import { HomeComponent } from "../home/home.component";
import { SidebarComponent } from "../../shared/sidebar/sidebar.component";
import { RouterOutlet } from "@angular/router";
import { HeaderComponent } from "../../common/header/header.component";
import { TimeFilterTabsComponent } from "../../common/time-filter-tabs/time-filter-tabs.component";

@Component({
  selector: "app-layout",
  imports: [SidebarComponent, RouterOutlet, HeaderComponent],
  templateUrl: "./layout.component.html",
  styleUrl: "./layout.component.scss",
})
export class LayoutComponent {}
