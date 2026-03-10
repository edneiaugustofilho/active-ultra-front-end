import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login';
import { tenantGuard } from './auth/tenant-guard';
import {AssetEventList} from './features/asset/asset-event-list/asset-event-list';

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
    loadComponent: () =>
      import('./home/home').then(m => m.Home),
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadComponent: () =>
          import('./features/dashboard/dashboard').then(m => m.Dashboard),
      },
      {
        path: 'dashboard',
        pathMatch: 'full',
        loadComponent: () =>
          import('./features/dashboard/dashboard').then(m => m.Dashboard),
      },
      {
        path: 'assets',
        children: [
          {
            path: '',
            pathMatch: 'full',
            loadComponent: () =>
              import('./features/asset/asset-list/assets-list')
                .then(m => m.AssetsList),
          },
          {
            path: 'new',
            pathMatch: 'full',
            loadComponent: () =>
              import('./features/asset/asset-form/asset-form')
                .then(m => m.AssetForm),
          },
          {
            path: ':id',
            pathMatch: 'full',
            loadComponent: () =>
              import('./features/asset/asset-form/asset-form')
                .then(m => m.AssetForm),
          },
        ],
      },
      {
        path: 'asset-events',
        children: [
          {
            path: '',
            pathMatch: 'full',
            loadComponent: () =>
              import('./features/asset/asset-event-list/asset-event-list')
                .then(m => m.AssetEventList),
          }
        ]
      }
    ],
  },

  { path: '**', redirectTo: '' },
];
