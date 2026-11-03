import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {
  http = inject(HttpClient);
  router = inject(Router);

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
    if (this.userform.invalid) {
      this.userform.markAllAsTouched();
      return;
    }

    this.http.post('https://localhost:7110/api/Auth/login', this.userform.value).subscribe({
      next: (response: any) => {
        if (response.result) {
          this.router.navigateByUrl('/layout/dashboard');
        } else {
          alert(response.message);
        }
      },
      error: (err) => {
        alert(err.error?.message ?? err.message);
      },
    });
  }
  onSignup() {
    this.router.navigateByUrl('/signup');
  }
}
