import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-error-toast',
  standalone: true,
  imports: [MatIconModule],
  template: `
    <div class="toast-content">
      <mat-icon>error</mat-icon>
      <span>{{ data }}</span>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: `
    .toast-content {
      display: flex;
      align-items: center;
      gap: 8px;
      color: white;
    }
  `,
})
export class ErrorToastComponent {
  data = inject(MAT_SNACK_BAR_DATA);
}
