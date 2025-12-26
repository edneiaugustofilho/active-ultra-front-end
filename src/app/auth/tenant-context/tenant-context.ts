import {Injectable} from '@angular/core';

const TENANT_STORAGE_KEY = 'activeUltra.tenantId';

@Injectable({ providedIn: 'root' })
export class TenantContextService {

  private tenantId: string | null = null;

  constructor() {
    this.tenantId = localStorage.getItem(TENANT_STORAGE_KEY);
  }

  setTenant(tenantId: string) {
    this.tenantId = tenantId;
    localStorage.setItem(TENANT_STORAGE_KEY, tenantId);
  }

  getTenant(): string | null {
    return this.tenantId;
  }

  hasTenant(): boolean {
    return !!this.tenantId;
  }

  clear() {
    this.tenantId = null;
    localStorage.removeItem(TENANT_STORAGE_KEY);
  }
}
