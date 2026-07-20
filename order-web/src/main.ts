import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideBrowserGlobalErrorListeners } from '@angular/core';
import { App } from './app/app';
import { Home } from './app/features/home/home';
import { Login } from './app/features/login/login';
import { Order } from './app/features/order/create-order/create-order';
import { OrderList } from './app/features/order/order-list/order-list';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'login', component: Login },
  { path: 'orders', component: OrderList },
  { path: 'orders/create', component: Order },
  { path: '**', redirectTo: 'home' },
];

bootstrapApplication(App, {
  providers: [provideBrowserGlobalErrorListeners(), provideRouter(routes), provideHttpClient()],
}).catch((err) => console.error(err));
