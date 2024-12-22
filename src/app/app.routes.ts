import { Routes } from "@angular/router";
import { DashboardComponent } from "./theme/dashboard/dashboard.component";
import { UserDetailsComponent } from "./theme/components/user-details/user-details.component";
import { LoginComponent } from "./theme/auth/login/login.component";
import { LayoutComponent } from "./theme/layout/layout.component";
import { DwReportComponent } from "./theme/components/dw-report/dw-report.component";
import { BetReportsComponent } from "./theme/components/bet-reports/bet-reports.component";
import { PlReportsComponent } from "./theme/components/pl-reports/pl-reports.component";
import { AuthGuard } from "./guards/auth.guard";

export const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "",
        redirectTo: "dashboard",
        pathMatch: "full", // Ensures that only the exact empty path redirects
      },
      {
        path: "dashboard",
        component: DashboardComponent,
        // canActivate: [AuthGuard],
      },
      {
        path: "user-detail",
        component: UserDetailsComponent,
        canActivate: [AuthGuard],
      },
      {
        path: "bet-report",
        component: BetReportsComponent,
        canActivate: [AuthGuard],
      },
      {
        path: "pl-report",
        component: PlReportsComponent,
        canActivate: [AuthGuard],
      },
      {
        path: "dw-report",
        component: DwReportComponent,
        canActivate: [AuthGuard],
      },
    ],
  },
  {
    path: "login",
    component: LoginComponent,
  },
];
