import { Component } from "@angular/core";
import { HomeComponent } from "../home/home.component";
import { SidebarComponent } from "../../shared/sidebar/sidebar.component";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "app-layout",
  imports: [SidebarComponent, RouterOutlet],
  templateUrl: "./layout.component.html",
  styleUrl: "./layout.component.scss",
})
export class LayoutComponent {}
