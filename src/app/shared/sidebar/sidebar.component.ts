import { Component } from "@angular/core";
import { Router, RouterLink, RouterModule } from "@angular/router";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-sidebar",
  imports: [RouterLink, RouterModule],
  templateUrl: "./sidebar.component.html",
  styleUrl: "./sidebar.component.scss",
})
export class SidebarComponent {
  constructor(public router: Router, private auth: AuthService) {}

  logout() {
    this.auth.logout().subscribe((resp) => {
      if (resp.meta.statusCode === 200) localStorage.clear();
      this.router.navigate(["/login"]);
    });
  }
}
