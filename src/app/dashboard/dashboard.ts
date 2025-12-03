import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../auth/auth';
import {CustomNavigator} from '../services/custom-navigator';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class DashboardComponent implements OnInit {
  message: string = 'Loading...';

  constructor(private http: HttpClient,
              private authService: AuthService,
              private customNavigator: CustomNavigator) {}

  ngOnInit(): void {
    this.message = 'loading..';

    this.http.get('http://localhost:8081/easy-erp-core/api/me', {responseType: 'text'})
      .subscribe({
        next: (res) => {
          this.message = res;
        },
        error: (e) => {
          console.log(e);
          this.message = 'Unauthorized or error fetching data'
        }
      });
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  logout(): void {
    this.authService.logout();
    this.customNavigator.navigate('/login');
  }

}
