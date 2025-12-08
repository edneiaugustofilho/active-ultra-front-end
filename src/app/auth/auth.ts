import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import {environment} from '../../environments/environment';

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

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<AuthResponse> {
    const request: AuthRequest = { email: username, password };

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

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
  }
}
