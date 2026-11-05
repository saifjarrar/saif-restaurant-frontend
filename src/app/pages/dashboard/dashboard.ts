import { Component, inject, OnInit, signal } from '@angular/core';
import {
  DashboardService,
  MostOrdered,
  OrderTicket,
  DashboardData,
  Reservation,
  RestaurantInfo,
} from '../../services/dashboard-service/dashboard-service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
  imports: [DatePipe],
})
export class Dashboard implements OnInit {
  date = new Date();

  dashboardService = inject(DashboardService);

  restaurantinfo = signal<RestaurantInfo[]>([]);
  ordertickets = signal<OrderTicket[]>([]);
  tonightreservations = signal<Reservation[]>([]);
  mostordered = signal<MostOrdered[]>([]);

  ngOnInit(): void {
    this.dashboardService.getDashboard().subscribe({
      next: (data: DashboardData) => {
        this.restaurantinfo.set(data.restaurantinfo ?? []);
        this.ordertickets.set(data.ordertickets ?? []);
        this.tonightreservations.set(data.tonightreservations ?? []);
        this.mostordered.set(data.mostordered ?? []);
      },
      error: (err: any) => {
        alert(err.error?.message ?? err.message);
      },
    });
  }

  markAs(id: number): void {
    this.dashboardService.advanceOrder(id).subscribe({
      next: (updated: OrderTicket) => {
        this.ordertickets.update((list) => list.map((o) => (o.id === updated.id ? updated : o)));
      },
      error: (err: any) => {
        alert(err.error?.message ?? err.message);
      },
    });
  }

  returnToReceived(id: number): void {
    this.dashboardService.returnOrder(id).subscribe({
      next: (updated: OrderTicket) => {
        this.ordertickets.update((list) => list.map((o) => (o.id === updated.id ? updated : o)));
      },
      error: (err: any) => {
        alert(err.error?.message ?? err.message);
      },
    });
  }

  barWidth(quantity: number): number {
    const max = Math.max(...this.mostordered().map((d) => d.quantity), 1);

    return (quantity / max) * 100;
  }
}
