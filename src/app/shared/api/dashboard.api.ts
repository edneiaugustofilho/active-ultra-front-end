import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {DashboardDto} from './dto/dashboard.dto';
import {environment} from '../../../environments/environment';

@Injectable({providedIn: 'root'})
export class DashboardApi {
  private readonly http = inject(HttpClient);

  private readonly baseUrl = `${environment.apiBaseUrl}/dashboard`;

  get(): Observable<DashboardDto> {
    return this.http.get<DashboardDto>(`${this.baseUrl}`);
  }

}
