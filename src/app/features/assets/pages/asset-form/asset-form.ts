import {Component, inject, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormBuilder, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import {AssetApi} from '../../../../core/api/asset-api';
import {AssetUpsertRequest} from '../../../../core/api/dto/asset.dto';
import {buildAssetForm} from './asset-form.factory';
import {AssetMapper} from './asset.mapper';
import {MatNativeDateModule, provideNativeDateAdapter} from '@angular/material/core';
import {NgxMaskDirective} from 'ngx-mask';
import {ToastService} from '../../../../shared/toast/toast';
import {
  ASSET_CATEGORY_PT_BR,
  ASSET_FUEL_TYPE_PT_BR, ASSET_OWNERSHIP_TYPE_PT_BR,
  ASSET_STATUS_PT_BR, ASSET_TRANSMISSION_TYPE_PT_BR,
  ASSET_VEHICLE_TYPE_PT_BR
} from '../../../../shared/all-types';
import {normalizeCurrency} from '../../../../shared/normalizers.util';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatTabsModule,
    NgxMaskDirective,
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './asset-form.html',
  styleUrls: ['./asset-form.css']
})
export class AssetFormComponent implements OnInit {

  protected readonly ASSET_CATEGORY_PT_BR = ASSET_CATEGORY_PT_BR;

  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private assetService = inject(AssetApi);
  private fb = inject(FormBuilder);
  private toastService = inject(ToastService);

  assetId?: string;
  isEditMode = false;

  assetsCategoriesKeys = Object.keys(ASSET_CATEGORY_PT_BR);
  assetsStatusKeys = Object.keys(ASSET_STATUS_PT_BR);
  vehicleTypesKeys = Object.keys(ASSET_VEHICLE_TYPE_PT_BR);
  fuelTypesKeys = Object.keys(ASSET_FUEL_TYPE_PT_BR);
  transmissionTypesKeys = Object.keys(ASSET_TRANSMISSION_TYPE_PT_BR);
  ownershipTypesKeys = Object.keys(ASSET_OWNERSHIP_TYPE_PT_BR);

  form = buildAssetForm(this.fb);

  ngOnInit() {
    this.assetId = this.route.snapshot.paramMap.get('id') ?? undefined;
    this.isEditMode = !!this.assetId;

    if (this.isEditMode) {
      this.loadAsset();
    }
  }

  loadAsset() {
    this.assetService.findById(this.assetId!)
      .subscribe(asset => this.form.patchValue(AssetMapper.toFormValue(asset)));
  }

  save() {
    if (this.form.invalid) return;

    const request: AssetUpsertRequest = AssetMapper.toUpsertRequest(this.form.getRawValue());

    const action$ = this.isEditMode
      ? this.assetService.update(this.assetId!, request)
      : this.assetService.create(request);

    action$.subscribe({
      next: () => this.toastService.concludedWithSuccess(),
      error: () => this.toastService.error('Erro inesperado')
    });
  }

  protected readonly ASSET_STATUS_PT_BR = ASSET_STATUS_PT_BR;
  protected readonly normalizeCurrency = normalizeCurrency;
  protected readonly ASSET_VEHICLE_TYPE_PT_BR = ASSET_VEHICLE_TYPE_PT_BR;
  protected readonly ASSET_FUEL_TYPE_PT_BR = ASSET_FUEL_TYPE_PT_BR;
  protected readonly ASSET_TRANSMISSION_TYPE_PT_BR = ASSET_TRANSMISSION_TYPE_PT_BR;
  protected readonly ASSET_OWNERSHIP_TYPE_PT_BR = ASSET_OWNERSHIP_TYPE_PT_BR;
}
