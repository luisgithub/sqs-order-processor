import { CommonModule } from '@angular/common';
import { Component, inject, signal, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { OrderService } from '../data/order.service';
import { OrderDto } from '../models/order.model';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ActivatedRoute, Router } from '@angular/router';
import { ToasterService } from '../../toaster/toaster.service';
import { EmptyPage } from '../../empty-page/empty-page';

@Component({
  selector: 'app-order-form',
  standalone: true,
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
    EmptyPage
  ],
  templateUrl: './form-order.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './form-order.css',
})
export class OrderForm {
  private fb = inject(FormBuilder);
  private orderService = inject(OrderService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private toaster = inject(ToasterService);

  savedOrder = signal<OrderDto | null>(null);
  orderId = signal<string | null>(null);
  isEditMode = signal<boolean>(false);
  isLoading = signal<boolean>(false);


  orderForm = this.fb.group({
    status: this.fb.nonNullable.control('PENDING', Validators.required),
    amount: this.fb.nonNullable.control(0, [Validators.required, Validators.min(0.01)]),
  });

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(id){
      this.orderId.set(id);
      this.isEditMode.set(true);
      this.loadOrderData(id);
    }
  }

  private loadOrderData(id: string): void {
    this.isLoading.set(true);
    this.orderService.getOrderById(id).subscribe({
      next: (order: OrderDto) => {
        this.orderForm.patchValue({
          status: order.status,
          amount: order.amount,
        });
        this.isLoading.set(false);
      },
      error: (err: unknown) => {
        console.log("Failed to load order", err);
        this.toaster.error('Failed to load order details');
        this.isLoading.set(false);
        this.router.navigate(['/orders']);
      },
    });
  }

  onSubmit() {
    if (this.orderForm.invalid) {
      return;
    }

    const formPayload: OrderDto = this.orderForm.getRawValue() as OrderDto;
    const currentId = this.orderId();

    if(this.isEditMode() && currentId){
      this.orderService.updateOrder(formPayload).subscribe({
        next: (responseRecord: OrderDto) => {
          this.savedOrder.set(responseRecord);
          (document.activeElement as HTMLElement)?.blur();
          this.toaster.success('Order updated successfully!');
          this.router.navigate(['/orders']);
        },
        error: (err: unknown) => {
          console.error('Failed to update order', err);
          this.toaster.error('Failed to update order. Please try again.');
        },
      });
    } else {
      this.orderService.createOrder(formPayload).subscribe({
        next: (responseRecord: OrderDto) => {
          this.savedOrder.set(responseRecord);
          (document.activeElement as HTMLElement)?.blur();
          this.toaster.success('Order created successfully!');
          this.router.navigate(['/orders']);
        },
        error: (err: unknown) => {
          console.error('Failed to place order', err);
          this.toaster.error('Failed to place order. Please try again.');
        },
      });
    }
  }
}
