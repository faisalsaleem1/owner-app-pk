import { Routes } from '@angular/router';
import { DashboardComponent } from './theme/dashboard/dashboard.component';
import { UserDetailsComponent } from './theme/components/user-details/user-details.component';

export const routes: Routes = [
    {
        path: "Dashboard",
        component: DashboardComponent,
      },
      {
        path: "userdetail",
        component: UserDetailsComponent,
      },
];
