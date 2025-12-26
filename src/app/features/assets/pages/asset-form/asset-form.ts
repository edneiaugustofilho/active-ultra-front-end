import {Component, inject, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
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

  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private assetService = inject(AssetApi);
  private fb = inject(FormBuilder);

  assetId?: string;
  isEditMode = false;

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

    const request : AssetUpsertRequest = AssetMapper.toUpsertRequest(this.form.getRawValue());

    const action$ = this.isEditMode
      ? this.assetService.update(this.assetId!, request)
      : this.assetService.create(request);

    action$.subscribe(() => this.router.navigate(['/assets']));
  }
}
