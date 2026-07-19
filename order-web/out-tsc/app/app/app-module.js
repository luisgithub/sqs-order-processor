import { __decorate } from "tslib";
import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { NavBar } from './features/nav-bar/nav-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { Home } from './features/home/home';
import { Users } from './features/users/users';
import { Companies } from './features/companies/companies';
import { Login } from './features/login/login';
import { MatCardModule } from '@angular/material/card';
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        declarations: [App, NavBar, Home, Users, Companies, Login],
        imports: [
            BrowserModule,
            AppRoutingModule,
            MatToolbarModule,
            MatButtonModule,
            MatIconModule,
            MatSidenavModule,
            MatListModule,
            MatCardModule,
        ],
        providers: [provideBrowserGlobalErrorListeners()],
        bootstrap: [App],
    })
], AppModule);
export { AppModule };
