import { Component, OnDestroy } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { appEmailValidator } from 'src/app/shared/validators/email-validator';
import { matchPasswordsValidator } from 'src/app/shared/validators/password-match-validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnDestroy {
  registerError: string = '';
  isLoading: boolean = false;
  constructor(
    private userService: UserService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  form = this.fb.group({
    email: ['', [Validators.required, appEmailValidator([''])]],
    passGroup: this.fb.group(
      {
        password: ['', [Validators.required, Validators.minLength(5)]],
        repeatPassword: ['', [Validators.required]],
      },
      {
        validators: [matchPasswordsValidator('password', 'repeatPassword')],
      }
    ),
  });

  clearErr() {
    setTimeout(() => {
      this.registerError = '';
    }, 3000);
  }
  register() {
    this.isLoading = true;
    if (this.form.invalid) {
      this.registerError = 'Invalid inputs!';
      this.isLoading = false;
      this.clearErr();
      return;
    }
    const { email, passGroup: { password, repeatPassword } = {} } =
      this.form.value;
    setTimeout(() => {
      this.userService.register(email!, password!, repeatPassword!).subscribe({
        error: (err) => {
          console.log(err);
          this.registerError = err.error.message;
          this.isLoading = false;
          this.clearErr();
        },
        complete: () => {
          this.registerError = '';
          this.isLoading = false;
          this.router.navigate(['/']);
        },
      });
    }, 1000);
  }
  ngOnDestroy(): void {}
}
