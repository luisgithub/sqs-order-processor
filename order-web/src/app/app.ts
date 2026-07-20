import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from './features/nav-bar/nav-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [NavBar, RouterOutlet],
  styleUrl: './app.css',
})
export class App {}
