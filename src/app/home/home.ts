import {Component, signal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Router, RouterLink, RouterOutlet} from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {AuthService} from '../auth/auth';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

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
export class Home {

  isMobile = false;

  sidenavOpen = signal(false);

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
    private readonly breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe([Breakpoints.Handset])
      .subscribe(result => this.isMobile = result.matches);
  }

  toggleSidenav(): void {
    this.sidenavOpen.update((current) => !current);
  }

  toggleSidenavMobile(): void {
    if (this.isMobile) {
      this.toggleSidenav();
    }
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']).then();
  }

  protected goToHome() {
    this.router.navigate(['/home']).then();
  }
}
