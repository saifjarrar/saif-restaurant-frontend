import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-signup',
  styleUrl: './signup.css',
  templateUrl: './signup.html',
})
export class Signup {
  router = inject(Router);
  http = inject(HttpClient);
  signupform: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.minLength(6), Validators.required]),
    checkbox: new FormControl(false, [Validators.requiredTrue]),
  });
  get checkbox() {
    return this.signupform.get('checkbox');
  }
  onSignup() {
    if (this.signupform.invalid) {
      this.signupform.markAllAsTouched();
      return;
    }

    const signupvalue = this.signupform.value;

    this.http.post('https://localhost:7118/api/Auth/register', signupvalue).subscribe({
      next: (response: any) => {
        if (response.result) {
          alert('Signup success');
          this.router.navigateByUrl('/login');
        } else {
          alert(response.message);
        }
      },
      error: (err) => {
        alert(err.error?.message ?? err.message);
      },
    });
  }

  onLogin() {
    this.router.navigateByUrl('/login');
  }
}
