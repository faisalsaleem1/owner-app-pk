import { Routes } from '@angular/router';
import { DashboardComponent } from './theme/dashboard/dashboard.component';
import { UserDetailsComponent } from './theme/components/user-details/user-details.component';
import { LoginComponent } from './theme/auth/login/login.component';
import { HomeComponent } from './theme/home/home.component';
import { LayoutComponent } from './theme/layout/layout.component';
import { DwReportComponent } from './theme/components/dw-report/dw-report.component';

export const routes: Routes = [
  {
      path: '',
      component: LayoutComponent,
      children: [
          {
            path: 'dw-report',
            component: DwReportComponent,
        },
        {
          path: 'user-detail',
          component: UserDetailsComponent,
      },
      ],
  },
  {
    path: 'login',
    component: LoginComponent,
}
];
