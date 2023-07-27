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
  register() {
    if (this.form.invalid) {
      return;
    }
    const { email, passGroup: { password, repeatPassword } = {} } =
      this.form.value;

    this.userService
      .register(email!, password!, repeatPassword!)
      .subscribe(() => {
        this.router.navigate(['/']);
      });
  }
  ngOnDestroy(): void {}
}
