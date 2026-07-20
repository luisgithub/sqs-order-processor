import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { OrderService } from '../data/order.service';
import { OrderDto } from '../models/order.model';

@Component({
  selector: 'app-order-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-list.html',
  styleUrl: './order-list.css',
})
export class OrderList implements OnInit {
  private orderService = inject(OrderService);

  orders = signal<OrderDto[]>([]);
  loading = signal(true);
  error = signal<string | null>(null);

  ngOnInit() {
    this.loadOrders();
  }

  loadOrders() {
    this.loading.set(true);
    this.error.set(null);

    this.orderService.getOrders().subscribe({
      next: (orders) => this.orders.set(orders),
      error: (err) => this.error.set('Failed to load orders'),
      complete: () => this.loading.set(false),
    });
  }
}
