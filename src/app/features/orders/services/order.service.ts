import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from '../../../config/api-url';
import { CreateOrderRequest, OrderTicket } from '../models/order.model';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = `${API_URL}/Dashboard`;

  getOrders(): Observable<{ ordertickets: OrderTicket[] }> {
    return this.http.get<{ ordertickets: OrderTicket[] }>(this.baseUrl);
  }

  createOrder(order: CreateOrderRequest): Observable<OrderTicket> {
    return this.http.post<OrderTicket>(`${this.baseUrl}/orders`, order);
  }

  advanceOrder(id: number): Observable<OrderTicket> {
    return this.http.put<OrderTicket>(`${this.baseUrl}/orders/${id}/advance`, {});
  }

  cancelOrder(id: number): Observable<OrderTicket> {
    return this.http.put<OrderTicket>(`${this.baseUrl}/orders/${id}/cancel`, {});
  }
}
