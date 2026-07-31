import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-empty-page',
  standalone: true,
  templateUrl: './empty-page.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './empty-page.css',
})
export class EmptyPage {}
