import { Component, OnChanges, SimpleChanges } from '@angular/core';
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
  isLoading: boolean = false;
  loginError: string = '';

  constructor(private userService: UserService, private router: Router) {}
  faSignIn = faSignIn;

  login(form: NgForm) {
    if (form.invalid) {
      this.loginError = 'All fields are required!';
      return;
    }
    this.isLoading = true;

    setTimeout(() => {
      const { email, password } = form.value;

      this.userService.login(email, password).subscribe({
        error: (err) => {
          this.loginError = err.error.message;
          this.isLoading = false;
        },
        complete: () => {
          this.isLoading = false;
          this.loginError = '';
          this.router.navigate(['/']);
        },
      });
    }, 1000);
  }
}
