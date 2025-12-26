import {ApplicationConfig} from '@angular/core';
import {provideRouter} from '@angular/router';
import {provideHttpClient, withInterceptors} from '@angular/common/http';

import {appRoutes} from './app.routes';
import {authInterceptor} from './auth/auth-interceptor';
import {tenantInterceptor} from './core/tenant/tenant-interceptor';
import {provideNativeDateAdapter} from '@angular/material/core';
import {provideNgxMask} from 'ngx-mask';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes),
    provideNativeDateAdapter(),
    provideNgxMask({
      dropSpecialCharacters: false,
    }),
    provideHttpClient(
      withInterceptors([authInterceptor, tenantInterceptor])
    ),
  ],
};
