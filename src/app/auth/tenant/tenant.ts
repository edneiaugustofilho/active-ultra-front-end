import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {AuthService} from '../auth';

export interface Tenant {
  id: string;
  name: string;
}

@Injectable({providedIn: 'root'})
export class TenantService {

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {
  }

  getTenantsForCurrentUser(): Observable<Tenant[]> {
    const userId = this.authService.getUserIdFromToken();
    if (!userId) {
      throw new Error('User ID not found in token');
    }

    const url = `${environment.authBaseUrl}/tenant/all`;
    return this.http.get<Tenant[]>(`${url}?userId=${userId}`);
  }
}
