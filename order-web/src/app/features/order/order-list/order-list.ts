import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { ConfirmDialog } from '../../../shared/confirm-dialog/confirm-dialog';
import { OrderService } from '../data/order.service';
import { OrderDto } from '../models/order.model';

@Component({
  selector: 'app-order-list',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatTableModule, MatButtonModule, MatDialogModule, MatIconModule, RouterLink],
  templateUrl: './order-list.html',
  styleUrl: './order-list.css',
})
export class OrderList implements OnInit {
  private orderService = inject(OrderService);
  private dialog = inject(MatDialog);

  orders = signal<OrderDto[]>([]);
  loading = signal(true);
  error = signal<string | null>(null);
  displayedColumns = ['id', 'status', 'amount', 'actions'];

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

  confirmDelete(orderId: string) {
    const dialogRef = this.dialog.open(ConfirmDialog, {
      data: { message: `Do you really want to delete order ${orderId}?` },
    });

    dialogRef.afterClosed().subscribe((confirmed) => {
      if (confirmed) {
        this.orderService.deleteOrder(orderId).subscribe({
          next: () => this.loadOrders(),
          error: () => this.error.set('Failed to delete order'),
        });
      }
    });
  }
}
