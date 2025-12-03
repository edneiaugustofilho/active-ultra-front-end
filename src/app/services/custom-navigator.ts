import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CustomNavigator {


  constructor(private router: Router) {
  }

  navigate(route: string) {
    this.router.navigate([route]).then(
      success => {
        if (success) {
          console.log('naviagion success');
        } else {
          console.log('naviagion success');
        }
      }
    ).catch(error => {
      console.log('Navigation erro', error);
    });
  }

}
