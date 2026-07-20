import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { OrderDto } from '../models/order.model';

@Injectable({ providedIn: 'root' })
export class OrderService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/api/orders`;

  createOrder(order: OrderDto): Observable<OrderDto> {
    return this.http.post<OrderDto>(this.apiUrl, order);
  }

  getOrders(): Observable<OrderDto[]> {
    return this.http.get<OrderDto[]>(this.apiUrl);
  }

  getOrderById(id: string): Observable<OrderDto> {
    return this.http.get<OrderDto>(`${this.apiUrl}/${id}`);
  }

  deleteOrder(id: string): Observable<unknown> {
    return this.http.delete(`${this.apiUrl}/${id}`, { responseType: 'text' });
  }
}
