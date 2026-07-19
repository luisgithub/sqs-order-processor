import { Component } from '@angular/core';
import { NavBar } from './features/nav-bar/nav-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [NavBar],
  styleUrl: './app.css',
})
export class App {}
