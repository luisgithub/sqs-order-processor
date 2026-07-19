import { Injectable, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SuccessToastComponent } from './success-toast.component';
import { ErrorToastComponent } from './error-toast.component';

@Injectable({ providedIn: 'root' })
export class ToasterService {
  private snackBar = inject(MatSnackBar);

  success(message: string) {
    this.snackBar.openFromComponent(SuccessToastComponent, {
      data: message,
      duration: 4000,
      horizontalPosition: 'end',
      verticalPosition: 'top',
      panelClass: ['toast-success'],
    });
  }

  error(message: string) {
    this.snackBar.openFromComponent(ErrorToastComponent, {
      data: message,
      duration: 6000,
      horizontalPosition: 'end',
      verticalPosition: 'top',
      panelClass: ['toast-error'],
    });
  }
}
