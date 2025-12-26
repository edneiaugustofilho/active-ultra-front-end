import {Component, signal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Router, RouterLink, RouterOutlet} from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {AuthService} from '../auth/auth';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomeComponent {

  sidenavOpen = signal(false);

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router) {
  }

  toggleSidenav(): void {
    this.sidenavOpen.update((current) => !current);
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']).then();
  }

  protected goToHome() {
    this.router.navigate(['/home']).then();
  }
}
