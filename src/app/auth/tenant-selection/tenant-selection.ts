import {Component, inject} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {Router} from '@angular/router';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';

import {MatCardModule} from '@angular/material/card';
import {MatError, MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';

import {Tenant, TenantService} from '../tenant/tenant';
import {TenantContextService} from '../tenant-context/tenant-context';
import {AuthService} from '../auth';

@Component({
  selector: 'app-tenant-selection',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatError,
    NgOptimizedImage
  ],
  templateUrl: './tenant-selection.html',
  styleUrl: './tenant-selection.scss'
})
export class TenantSelectionComponent {

  private fb: FormBuilder = inject(FormBuilder);

  tenants: Tenant[] = [];

  loading = true;
  submitting = false;
  loadErrorMessage = '';
  submitErrorMessage = '';

  form = this.fb.group({
    tenantId: ['', Validators.required]
  });

  constructor(
    private tenantService: TenantService,
    private tenantContext: TenantContextService,
    private authService: AuthService,
    private router: Router
  ) {
    this.loadTenants();
  }

  private loadTenants(): void {
    this.tenantService.getTenantsForCurrentUser().subscribe({
      next: (tenants) => {
        this.tenants = tenants;
        this.loading = false;

        if (tenants.length === 1) {
          this.form.patchValue({tenantId: tenants[0].id});
          console.log("tenants length: " + tenants.length);
          console.log("tenant name: " + tenants[0].name);
          // this.onSubmit();
        }
      },
      error: () => {
        this.loadErrorMessage = 'Could not load tenants. Please try again.';
        this.loading = false;
      }
    });
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const tenantId = this.form.value.tenantId!;
    this.submitting = true;
    this.submitErrorMessage = '';

    // 1) save tenant locally
    this.tenantContext.setTenant(tenantId);

    this.submitting = false;
    this.router.navigate(['/home']);
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
