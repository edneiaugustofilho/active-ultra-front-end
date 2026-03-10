import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {PageResponse} from './dto/page-response';
import {AssetEventDto} from './dto/asset-event-dto';

@Injectable({providedIn: 'root'})
export class AssetEventApi {
  private readonly http = inject(HttpClient);

  private readonly baseUrl = `${environment.apiBaseUrl}/asset-events`;

  findById(id: string): Observable<AssetEventDto> {
    return this.http.get<AssetEventDto>(`${this.baseUrl}?id=${id}`);
  }

  create(request: AssetEventDto): Observable<AssetEventDto> {
    return this.http.post<AssetEventDto>(this.baseUrl, request);
  }

  update(id: string, request: AssetEventDto): Observable<AssetEventDto> {
    return this.http.put<AssetEventDto>(`${this.baseUrl}?id=${id}`, request);
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
  }): Observable<PageResponse<AssetEventDto>> {
    return this.http.post<PageResponse<AssetEventDto>>(`${this.baseUrl}/search`, options);
  }
}
