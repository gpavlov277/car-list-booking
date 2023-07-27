import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  hideCore: boolean = false;
  title = 'booking-list-app';

  constructor(private router: Router) {
    router.events.forEach((e) => {
      if (e instanceof NavigationStart) {
        if (e['url'] == '/login' || e['url'] == '/register') {
          this.hideCore = true;
        } else {
          this.hideCore = false;
        }
      }
    });
  }
}
