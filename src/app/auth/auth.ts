import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

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
  private apiUrl = 'http://localhost:8091/user-jwt/api/auth/login';
  private tokenKey = 'jwt_token';

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<AuthResponse> {
    const request: AuthRequest = { email: username, password };

    return this.http.post<AuthResponse>(this.apiUrl, request).pipe(
      tap((response) => {
        if (response && response.token) {
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
