import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {AssetResponse, AssetUpsertRequest} from './dto/asset.dto';
import {PageResponse} from './dto/page-response';
import {ToastService} from '../../shared/toast/toast';

@Injectable({providedIn: 'root'})
export class AssetApi {
  private readonly http = inject(HttpClient);

  // Adjust if your backend path changes
  private readonly baseUrl = `${environment.apiBaseUrl}/assets`;

  findById(id: string): Observable<AssetResponse> {
    return this.http.get<AssetResponse>(`${this.baseUrl}?id=${id}`);
  }

  create(request: AssetUpsertRequest): Observable<AssetResponse> {
    return this.http.post<AssetResponse>(this.baseUrl, request);
  }

  update(id: string, request: AssetUpsertRequest): Observable<AssetResponse> {
    return this.http.put<AssetResponse>(`${this.baseUrl}?id=${id}`, request);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}?id=${id}`);
  }

  /**
   * Basic search/list endpoint.
   * Align query params with backend SearchInput when ready.
   */
  search(options?: {
    query?: string;
    pageNumber?: number;
    pageSize?: number;
    sortBy?: string;
    direction?: 'ASC' | 'DESC';
  }): Observable<PageResponse<AssetResponse>> {
    return this.http.post<PageResponse<AssetResponse>>(`${this.baseUrl}/search`, options);
  }
}
