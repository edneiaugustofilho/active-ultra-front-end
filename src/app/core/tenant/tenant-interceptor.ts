import {HttpInterceptorFn} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {inject} from '@angular/core';
import {TenantContextService} from '../../auth/tenant-context/tenant-context';

export const tenantInterceptor: HttpInterceptorFn = (req, next) => {
  const tenantContext = inject(TenantContextService);
  const tenantId = tenantContext.getTenant();

  const isCoreCall = req.url.startsWith(environment.apiBaseUrl);

  if (tenantId && isCoreCall) {
    const cloned = req.clone({
      setHeaders: {'X-Tenant-Id': tenantId}
    });
    return next(cloned);
  }

  return next(req);
};
