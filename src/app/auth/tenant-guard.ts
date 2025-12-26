import {CanActivateFn, Router} from '@angular/router';
import {AuthService} from './auth';
import {inject} from '@angular/core';
import {TenantContextService} from './tenant-context/tenant-context';

export const tenantGuard: CanActivateFn = (route, state) => {
  const authService: AuthService = inject(AuthService);
  const tenantContext: TenantContextService = inject(TenantContextService);
  const router: Router = inject(Router);

  if (!authService.isLoggedIn()) {
    return router.createUrlTree(['/login']);
  }
  if (!tenantContext.hasTenant()) {
    return router.createUrlTree(['/tenant-selection']);
  }

  return true;
}
