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
  });
  onSignup() {
    const signupvalue = this.signupform.value;
    this.http.post('https://localhost:7110/api/Auth/register', signupvalue).subscribe({
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
