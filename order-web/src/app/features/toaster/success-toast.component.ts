import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-success-toast',
  standalone: true,
  imports: [MatIconModule],
  template: `
    <div class="toast-content">
      <mat-icon>check_circle</mat-icon>
      <span>{{ data }}</span>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: `
    .toast-content {
      display: flex;
      align-items: center;
      gap: 8px;
      color: black;
    }
    .toast-content mat-icon {
      color: #4caf50;
    }
  `,
})
export class SuccessToastComponent {
  data = inject(MAT_SNACK_BAR_DATA);
}
