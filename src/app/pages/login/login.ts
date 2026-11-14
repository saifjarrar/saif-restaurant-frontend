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

    // الطلب لازم يكون جوّا الدالة، بعد فحص الفورم
    this.http
      .post<LoginResponse>('https://localhost:7118/api/Auth/login', this.userform.value)
      .subscribe({
        next: (response) => {
          if (response.isSuccess && response.result) {
            // احفظ التوكن والدور (موجودين جوّا response.result)
            this.auth.saveSession(response.result.token, response.result.role);

            // الأدمن للداشبورد، والزبون للمينيو
            this.router.navigateByUrl(
              response.result.role === 'Admin' ? '/layout/dashboard' : '/layout/menu',
            );
          } else {
            alert(response.errors?.[0] ?? 'Login failed');
          }
        },
        error: (err) => {
          // إيميل أو باسورد غلط = 401، والرسالة جوّا errors
          alert(err.error?.errors?.[0] ?? err.message);
        },
      });
  }

  onSignup() {
    this.router.navigateByUrl('/signup');
  }
}
