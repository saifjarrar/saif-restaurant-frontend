import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

interface SignupResponse {
  isSuccess?: boolean;
  result?: any;
  errors?: string[];
  message?: string;
}

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-signup',
  styleUrl: './signup.css',
  templateUrl: './signup.html',
})
export class Signup {
  router = inject(Router);
  http = inject(HttpClient);

  errorMessage = '';

  signupform: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern(/^(?=.*[A-Za-z])(?=.*[0-9]).{8,}$/),
    ]),
    checkbox: new FormControl(false, [Validators.requiredTrue]),
  });

  get email() {
    return this.signupform.get('email');
  }

  get password() {
    return this.signupform.get('password');
  }

  get checkbox() {
    return this.signupform.get('checkbox');
  }

  onSignup() {
    this.errorMessage = '';

    if (this.signupform.invalid) {
      this.signupform.markAllAsTouched();
      return;
    }

    const signupvalue = {
      email: this.email?.value,
      password: this.password?.value,
    };

    this.http
      .post<SignupResponse>('https://localhost:7118/api/Auth/register', signupvalue)
      .subscribe({
        next: (response) => {
          if (response.isSuccess && response.result) {
            alert('Your account has been created successfully.');
            this.router.navigateByUrl('/login');
          } else {
            this.errorMessage = this.getReadableError(response.errors, response.message);
          }
        },
        error: (err) => {
          if (err.status === 0) {
            this.errorMessage = 'Unable to connect to the server. Please try again later.';
          } else if (err.status === 400 || err.status === 409) {
            this.errorMessage = this.getReadableError(err.error?.errors, err.error?.message);
          } else if (err.status >= 500) {
            this.errorMessage = 'Something went wrong on the server. Please try again later.';
          } else {
            this.errorMessage = this.getReadableError(err.error?.errors, err.error?.message);
          }
        },
      });
  }

  getReadableError(errors?: string[], message?: string): string {
    const allErrors = [...(errors ?? []), message ?? '']
      .filter((error) => error && error.trim() && error.trim() !== '-')
      .join(' ')
      .toLowerCase();

    if (!allErrors) {
      return 'Unable to create your account. Please try again.';
    }

    if (
      allErrors.includes('already exists') ||
      allErrors.includes('already registered') ||
      allErrors.includes('duplicate') ||
      allErrors.includes('taken')
    ) {
      return 'An account with this email address already exists.';
    }

    if (allErrors.includes('email')) {
      return 'Please check your email address and try again.';
    }

    if (allErrors.includes('password')) {
      return 'Please choose a stronger password and try again.';
    }

    return 'Unable to create your account. Please check your information and try again.';
  }

  onLogin() {
    this.router.navigateByUrl('/login');
  }
}
