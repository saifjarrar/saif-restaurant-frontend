import { Component, inject } from '@angular/core';
import { DashboardService } from '../../services/dashboard-service';

@Component({
  imports: [],
  selector: 'app-dashboard',
  styleUrl: './dashboard.css',
  templateUrl: './dashboard.html',
})
export class Dashboard {
  dashboardService = inject(DashboardService);
  ordertickets = this.dashboardService.ordertickets;
  tonightreservations = this.dashboardService.tonightreservations;
  mostordered = this.dashboardService.mostordered;
  restaurantinfo = this.dashboardService.restaurantinfo;
  markAs(ordernum: string) {
    this.dashboardService.markAs(ordernum);
  }
  barWidth(quantity: number) {
    return this.dashboardService.barWidth(quantity);
  }
}
