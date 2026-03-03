import {Component, inject, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthService} from '../../../../auth/auth';
import {CustomNavigator} from '../../../../services/custom-navigator';
import {DashboardApi} from '../../../../shared/api/dashboard.api';
import {Observable, shareReplay} from 'rxjs';
import {DashboardDto} from '../../../../shared/api/dto/dashboard.dto';
import {BrlCurrencyPipe} from '../../../../shared/pipe/brl-currency.pipe';
import {ASSET_CATEGORY_PT_BR, ASSET_STATUS_PT_BR} from '../../../../shared/all-types';
import {translateEnum} from '../../../../shared/i18n/translate.util';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, BrlCurrencyPipe],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css'],
  providers: [BrlCurrencyPipe]
})
export class DashboardComponent implements OnInit {

  private dashboardApi: DashboardApi = inject(DashboardApi);

  message: string = 'Loading...';

  constructor(private authService: AuthService,
              private customNavigator: CustomNavigator) {
  }

  dashboard$: Observable<DashboardDto> = this.dashboardApi.get().pipe(shareReplay(1));

  ngOnInit(): void {
    this.message = 'loading...';
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  logout(): void {
    this.authService.logout();
    this.customNavigator.navigate('/login');
  }

  protected readonly ASSET_CATEGORY_PT_BR = ASSET_CATEGORY_PT_BR;
  protected readonly translateEnum = translateEnum;
  protected readonly ASSET_STATUS_PT_BR = ASSET_STATUS_PT_BR;
}
