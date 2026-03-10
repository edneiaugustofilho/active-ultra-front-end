import {Component, inject} from '@angular/core';
import {AssetEventApi} from '../../../shared/api/asset-event-api';
import {PageResponse} from '../../../shared/api/dto/page-response';
import {AssetEventSearchRequest} from '../../../shared/api/dto/asset-event-search-request';
import {AssetEventDto} from '../../../shared/api/dto/asset-event-dto';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import {translateEnum} from '../../../shared/i18n/translate.util';
import {ASSET_EVENT_TYPE_PT_BR} from '../../../shared/all-types';
import {MatButton, MatIconButton} from '@angular/material/button';
import {MatCard} from '@angular/material/card';
import {MatFormField, MatInput, MatLabel, MatPrefix, MatSuffix} from '@angular/material/input';
import {MatIcon} from '@angular/material/icon';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-asset-event-list',
  imports: [
    MatButton,
    MatCard,
    MatFormField,
    MatIcon,
    MatIconButton,
    MatInput,
    MatLabel,
    MatPaginator,
    MatPrefix,
    MatSuffix,
    RouterLink
  ],
  templateUrl: './asset-event-list.html',
  styleUrl: './asset-event-list.css',
})
export class AssetEventList {

  private readonly assetEventApi: AssetEventApi = inject(AssetEventApi);

  loading = true;
  error?: string;

  page?: PageResponse<AssetEventDto>;
  searchRequest: AssetEventSearchRequest = {
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

    this.assetEventApi.search(this.searchRequest)
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

  protected readonly translateEnum = translateEnum;
  protected readonly ASSET_EVENT_TYPE_PT_BR = ASSET_EVENT_TYPE_PT_BR;

}
