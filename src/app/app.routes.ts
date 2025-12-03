import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login';
import { authGuard } from './auth/auth-guard';
import { DashboardComponent } from './dashboard/dashboard';

export const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard]
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];
