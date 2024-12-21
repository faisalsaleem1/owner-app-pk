import { Routes } from '@angular/router';
import { DashboardComponent } from './theme/dashboard/dashboard.component';
import { UserDetailsComponent } from './theme/components/user-details/user-details.component';
import { LoginComponent } from './theme/auth/login/login.component';

export const routes: Routes = [
    {
        path: "Dashboard",
        component: DashboardComponent,
      },
      {
        path: "userdetail",
        component: UserDetailsComponent,
      },
      {
        path:'login',
        component: LoginComponent
      }
];
