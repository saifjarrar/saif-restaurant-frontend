import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DashboardService } from '../../services/dashboard-service/dashboard-service';
import { AuthService } from '../../services/auth-service/auth-service';

@Component({
  selector: 'app-reservation',
  imports: [ReactiveFormsModule],
  templateUrl: './reservation.html',
  styleUrl: './reservation.css',
})
export class Reservation {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private dashboardService = inject(DashboardService);
  auth = inject(AuthService);

  isSending = signal(false);

  errorMessage = signal('');

  days = this.buildDays();

  guestOptions = [1, 2, 3, 4, 5, 6, 7, 8];

  times = [
    { value: '1:00 PM', full: false },
    { value: '2:00 PM', full: false },
    { value: '6:30 PM', full: false },
    { value: '7:00 PM', full: false },
    { value: '7:30 PM', full: true },
    { value: '8:00 PM', full: false },
    { value: '8:30 PM', full: false },
    { value: '9:00 PM', full: true },
  ];

  seatingOptions = ['Indoor', 'Terrace', 'Family section'];

  form = this.fb.nonNullable.group({
    date: [this.days[0].value, Validators.required], // أول يوم = اليوم
    guests: [4, [Validators.required, Validators.min(1), Validators.max(8)]],
    time: ['8:00 PM', Validators.required],
    seating: ['Indoor', Validators.required],
    name: ['', Validators.required],

    phone: ['', [Validators.required, Validators.pattern(/^[0-9+\s-]{7,15}$/)]],
  });

  private buildDays() {
    const names = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const result = [];

    for (let i = 0; i < 7; i++) {
      const day = new Date();
      day.setDate(day.getDate() + i);

      result.push({
        value: this.toIsoDate(day),
        weekday: i === 0 ? 'Today' : names[day.getDay()],
        number: day.getDate(),
      });
    }

    return result;
  }

  private toIsoDate(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  confirm() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const request = this.form.getRawValue();

    this.isSending.set(true);
    this.errorMessage.set('');

    this.dashboardService.createReservation(request).subscribe({
      next: () => {
        this.isSending.set(false);
        this.router.navigateByUrl('/layout/dashboard');
      },

      error: (err) => {
        this.isSending.set(false);
        this.errorMessage.set(err.error?.message ?? 'Something went wrong. Please try again.');
      },
    });
  }
  confirmcustomer() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const request = this.form.getRawValue();

    this.isSending.set(true);
    this.errorMessage.set('');

    this.dashboardService.createReservation(request).subscribe({
      next: () => {
        this.isSending.set(false);
        alert('Reservation created successfully!');
      },

      error: (err) => {
        this.isSending.set(false);
        this.errorMessage.set(err.error?.message ?? 'Something went wrong. Please try again.');
      },
    });
  }
}
