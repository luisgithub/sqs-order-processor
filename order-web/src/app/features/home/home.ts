import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  imports: [MatCardModule],
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './home.css',
})
export class Home {}
