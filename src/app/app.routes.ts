import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login';
import { tenantGuard } from './auth/tenant-guard';

export const appRoutes: Routes = [
  { path: 'login', pathMatch: 'full', component: LoginComponent },

  {
    path: 'tenant-selection',
    pathMatch: 'full',
    loadComponent: () =>
      import('./auth/tenant-selection/tenant-selection')
        .then(m => m.TenantSelectionComponent),
  },

  {
    path: '',
    canActivate: [tenantGuard],
    loadComponent: () => import('./home/home').then(m => m.HomeComponent),
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadComponent: () => import('./dashboard/dashboard').then(m => m.DashboardComponent),
      },
      {
        path: 'dashboard',
        pathMatch: 'full',
        loadComponent: () => import('./dashboard/dashboard').then(m => m.DashboardComponent),
      },
      {
        path: 'assets',
        children: [
          {
            path: '',
            pathMatch: 'full',
            loadComponent: () =>
              import('./features/assets/pages/assets/assets')
                .then(m => m.AssetsComponent),
          },
          {
            path: 'new',
            pathMatch: 'full',
            loadComponent: () =>
              import('./features/assets/pages/asset-form/asset-form')
                .then(m => m.AssetFormComponent),
          },
          {
            path: ':id',
            pathMatch: 'full',
            loadComponent: () =>
              import('./features/assets/pages/asset-form/asset-form')
                .then(m => m.AssetFormComponent),
          },
        ],
      },
    ],
  },

  { path: '**', redirectTo: '' },
];
