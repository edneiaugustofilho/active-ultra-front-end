import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, tap} from 'rxjs';
import {environment} from '../../environments/environment';
import {TenantContextService} from './tenant-context/tenant-context';

interface AuthRequest {
  email: string;
  password: string;
}

interface AuthResponse {
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = `${environment.authBaseUrl}/auth/login`;
  private tokenKey = 'jwt_token';

  constructor(private http: HttpClient,
              private tenantContext: TenantContextService) {
  }

  login(username: string, password: string): Observable<AuthResponse> {
    const request: AuthRequest = {email: username, password};

    return this.http.post<AuthResponse>(this.loginUrl, request).pipe(
      tap((response) => {
        if (response?.token) {
          localStorage.setItem(this.tokenKey, response.token);
        }
      })
    );
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  getUserIdFromToken(): string | null {
    const token = this.getToken();
    if (!token) return null;

    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload['id'] ?? null;
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  logout(): void {
    this.tenantContext.clear();
    localStorage.removeItem(this.tokenKey);
  }
}
