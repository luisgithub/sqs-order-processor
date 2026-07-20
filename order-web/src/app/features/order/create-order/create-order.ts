import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
<<<<<<< HEAD:order-web/src/app/features/order/order.ts
import { OrderService } from './data/order.service';
import { OrderDto } from './models/order.model';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ToasterService } from '../toaster/toaster.service';
=======
import { OrderService } from '../data/order.service';
import { OrderDto } from '../models/order.model';
>>>>>>> full-service-features:order-web/src/app/features/order/create-order/create-order.ts

@Component({
  selector: 'app-order-form',
  standalone: true,
<<<<<<< HEAD:order-web/src/app/features/order/order.ts
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
  ],
  templateUrl: './order.html',
  styleUrl: './order.css',
=======
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-order.html',
  styleUrl: './create-order.css',
>>>>>>> full-service-features:order-web/src/app/features/order/create-order/create-order.ts
})
export class Order {
  private fb = inject(FormBuilder);
  private orderService = inject(OrderService);
  private toaster = inject(ToasterService);

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
        this.orderForm.reset({ status: 'PENDING', amount: 0 });
        (document.activeElement as HTMLElement)?.blur();
        this.toaster.success('Order created successfully!');
      },
      error: (err: unknown) => {
        console.error('Failed to place order', err);
        this.toaster.error('Failed to place order. Please try again.');
      },
    });
  }
}
