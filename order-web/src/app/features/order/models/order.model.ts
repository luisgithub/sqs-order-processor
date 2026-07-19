// src/app/features/orders/models/order.model.ts
export interface OrderDto {
  id?: string | null; // Nullable because the frontend doesn't have it yet
  status: string;
  amount: number;
}
