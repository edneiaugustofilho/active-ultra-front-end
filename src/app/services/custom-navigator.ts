import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CustomNavigator {


  constructor(private router: Router) {
  }

  navigate(route: string): void {
    this.router
      .navigate([route])
      .then((success) => {
        // do nothing
      })
      .catch((error) => {
        console.error('Navigation error', error);
      });
  }

}
