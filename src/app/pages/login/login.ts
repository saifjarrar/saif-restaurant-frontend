import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService, LoginResponse } from '../../services/auth-service/auth-service';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {
  http = inject(HttpClient);
  router = inject(Router);
  auth = inject(AuthService);

  errorMessage = '';

  userform: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  get email() {
    return this.userform.get('email');
  }

  get password() {
    return this.userform.get('password');
  }

  onLogin() {
    this.errorMessage = '';

    if (this.userform.invalid) {
      this.userform.markAllAsTouched();
      return;
    }

    this.http
      .post<LoginResponse>('https://localhost:7118/api/Auth/login', this.userform.value)
      .subscribe({
        next: (response) => {
          if (response.isSuccess && response.result) {
            this.auth.saveSession(response.result.token, response.result.role);

            this.router.navigateByUrl(
              response.result.role === 'Admin' ? '/layout/dashboard' : '/layout/menu',
            );
          } else {
            this.errorMessage = this.getReadableError(response.errors);
          }
        },

        error: (err) => {
          if (err.status === 0) {
            this.errorMessage = 'Unable to connect to the server. Please try again later.';
          } else if (err.status === 401) {
            this.errorMessage = 'Incorrect email or password. Please check your credentials.';
          } else if (err.status === 400) {
            this.errorMessage = this.getReadableError(err.error?.errors);
          } else if (err.status >= 500) {
            this.errorMessage = 'Something went wrong on the server. Please try again later.';
          } else {
            this.errorMessage = 'Login failed. Please try again.';
          }
        },
      });
  }

  getReadableError(errors?: string[]): string {
    const error = errors?.find((item) => item && item.trim() !== '' && item.trim() !== '-');

    if (!error) {
      return 'Unable to log in. Please check your credentials and try again.';
    }

    const message = error.toLowerCase();

    if (
      message.includes('password') ||
      message.includes('invalid credentials') ||
      message.includes('invalid email') ||
      message.includes('user not found') ||
      message.includes('incorrect')
    ) {
      return 'Incorrect email or password. Please check your credentials.';
    }

    if (
      message.includes('email') &&
      (message.includes('not found') || message.includes('does not exist'))
    ) {
      return 'No account was found with this email address.';
    }

    return 'Unable to log in. Please check your credentials and try again.';
  }

  onSignup() {
    this.router.navigateByUrl('/signup');
  }
}
