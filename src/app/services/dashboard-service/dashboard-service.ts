import { API_URL } from '../../config/api-url';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface RestaurantInfo {
  title: string;
  value: string;
  describe: string;
  change?: string;
  color: string;
}

export interface OrderDish {
  name: string;
  quantity: number;
  unitPrice: number | null;
}

export interface OrderTicket {
  id: number;
  ordernum: string;
  table: string;
  dishes: OrderDish[];
  orderstatus: string;
  readytime: string;
  total: number | null;
  createdAt: string | null;
  readyAt: string | null;
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
export interface CreateOrderDish {
  name: string;
  quantity: number;
}

export interface CreateOrderRequest {
  table: string;
  dishes: CreateOrderDish[];
}
export interface DashboardData {
  restaurantinfo: RestaurantInfo[];
  ordertickets: OrderTicket[];
  tonightreservations: Reservation[];
  mostordered: MostOrdered[];
}
export interface OrderData {
  ordertickets: OrderTicket[];
}
export interface CreateReservationRequest {
  name: string;
  phone: string;
  date: string;
  guests: number;
  seating: string;
}
@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private http = inject(HttpClient);
  private baseUrl = `${API_URL}/Dashboard`;

  getDashboard(): Observable<DashboardData> {
    return this.http.get<DashboardData>(this.baseUrl);
  }
  getorder() {
    return this.http.get<OrderData>(this.baseUrl);
  }

  advanceOrder(id: number): Observable<OrderTicket> {
    return this.http.put<OrderTicket>(`${this.baseUrl}/orders/${id}/advance`, {});
  }
  createOrder(order: CreateOrderRequest): Observable<OrderTicket> {
    return this.http.post<OrderTicket>(`${this.baseUrl}/orders`, order);
  }
  createReservation(reservation: CreateReservationRequest): Observable<Reservation> {
    return this.http.post<Reservation>(`${this.baseUrl}/reservations`, reservation);
  }
  cancelOrder(id: number): Observable<OrderTicket> {
    return this.http.put<OrderTicket>(`${this.baseUrl}/orders/${id}/cancel`, {});
  }
}
