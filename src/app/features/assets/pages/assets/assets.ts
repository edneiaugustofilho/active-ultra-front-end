import {Component, inject, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

import {AssetResponse} from '../../../../core/api/dto/asset.dto';
import {AssetApi} from '../../../../core/api/asset-api';
import {PageResponse} from '../../../../core/api/dto/page-response';
import {AssetSearchRequest} from '../../../../core/api/dto/asset-search-request';
import {MatPaginatorModule, PageEvent} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {RouterLink} from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-assets',
  imports: [
    CommonModule,
    RouterLink,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './assets.html',
})
export class AssetsComponent implements OnInit {
  private readonly api = inject(AssetApi);

  loading = true;
  error?: string;

  page?: PageResponse<AssetResponse>;
  searchRequest: AssetSearchRequest = {
    query: "",
    pageNumber: 1,
    pageSize: 5,
    sortBy: 'createdAt',
    direction: 'DESC'
  };

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.loading = true;
    this.error = undefined;

    this.api.search(this.searchRequest)
      .subscribe({
        next: (response) => {
          this.page = response;
          this.loading = false;
        },
        error: (err) => {
          this.error = err?.message ?? 'Failed to load assets';
          this.loading = false;
        }
      });
  }

  onQueryChange(value: string) {
    this.searchRequest = {
      ...this.searchRequest,
      query: value,
      pageNumber: 1,
    }
    this.load();
  }

  onPageChange(ev: PageEvent): void {
    this.searchRequest = {
      ...this.searchRequest,
      pageNumber: ev.pageIndex + 1,
      pageSize: ev.pageSize,
    }
    this.load();
  }

}
