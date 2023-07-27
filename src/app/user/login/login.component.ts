import { Component } from '@angular/core';
import { faSignIn } from '@fortawesome/free-solid-svg-icons';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  appEmailDomains = [''];

  constructor(private userService: UserService, private router: Router) {}
  faSignIn = faSignIn;

  login(form: NgForm) {
    if (form.invalid) {
      console.log('Invalid form inputs!');
      return;
    }
    const { email, password } = form.value;

    this.userService.login(email, password).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
