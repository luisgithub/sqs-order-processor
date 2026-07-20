import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { OrderService } from '../data/order.service';
import { OrderDto } from '../models/order.model';

@Component({
  selector: 'app-order-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-order.html',
  styleUrl: './create-order.css',
})
export class Order {
  private fb = inject(FormBuilder);
  private orderService = inject(OrderService);

  savedOrder = signal<OrderDto | null>(null);

  orderForm = this.fb.group({
    status: this.fb.nonNullable.control('PENDING', Validators.required),
    amount: this.fb.nonNullable.control(0, [Validators.required, Validators.min(0.01)]),
  });

  onSubmit() {
    if (this.orderForm.invalid) {
      return;
    }

    const formPayload: OrderDto = this.orderForm.getRawValue() as OrderDto;

    this.orderService.createOrder(formPayload).subscribe({
      next: (responseRecord: OrderDto) => {
        this.savedOrder.set(responseRecord);
        this.orderForm.reset();
      },
      error: (err: unknown) => console.error('Failed to place order', err),
    });
  }
}
