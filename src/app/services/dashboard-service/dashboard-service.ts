import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface RestaurantInfo {
  title: string;
  value: string;
  describe: string;
  color: string;
}

export interface OrderDish {
  name: string;
  quantity: number;
}

export interface OrderTicket {
  id: number;
  ordernum: string;
  table: string;
  dishes: OrderDish[];
  orderstatus: string;
  readytime: string;
}

export interface Reservation {
  name: string;
  time: string;
  guests: number;
  table: string;
}

export interface MostOrdered {
  name: string;
  quantity: number;
}

export interface DashboardData {
  restaurantinfo: RestaurantInfo[];
  ordertickets: OrderTicket[];
  tonightreservations: Reservation[];
  mostordered: MostOrdered[];
}

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private http = inject(HttpClient);
  private baseUrl = 'https://localhost:7118/api/Dashboard';

  getDashboard(): Observable<DashboardData> {
    return this.http.get<DashboardData>(this.baseUrl);
  }

  advanceOrder(id: number): Observable<OrderTicket> {
    return this.http.put<OrderTicket>(`${this.baseUrl}/orders/${id}/advance`, {});
  }
}
