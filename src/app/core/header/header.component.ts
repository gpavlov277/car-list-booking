import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { UserService } from 'src/app/user/user.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  /**
   *
   */
  constructor(private userService: UserService, private router: Router) {}
  faBars = faBars;
  get isLogged(): boolean {
    return this.userService.isLogged;
  }
  get userEmail() {
    let userName;
    if (this.userService.user?.email) {
      userName = this.userService.user?.email.split('@');
    }
    if (userName) return userName[0];
    else return 'Guest';
  }
  logout() {
    this.userService.logout();
    this.router.navigate(['/']);
  }
}
