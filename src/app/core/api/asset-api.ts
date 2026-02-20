import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {AssetDto} from './dto/asset.dto';
import {PageResponse} from './dto/page-response';

@Injectable({providedIn: 'root'})
export class AssetApi {
  private readonly http = inject(HttpClient);

  private readonly baseUrl = `${environment.apiBaseUrl}/assets`;

  findById(id: string): Observable<AssetDto> {
    return this.http.get<AssetDto>(`${this.baseUrl}?id=${id}`);
  }

  create(request: AssetDto): Observable<AssetDto> {
    return this.http.post<AssetDto>(this.baseUrl, request);
  }

  update(id: string, request: AssetDto): Observable<AssetDto> {
    return this.http.put<AssetDto>(`${this.baseUrl}?id=${id}`, request);
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
  }): Observable<PageResponse<AssetDto>> {
    return this.http.post<PageResponse<AssetDto>>(`${this.baseUrl}/search`, options);
  }
}
