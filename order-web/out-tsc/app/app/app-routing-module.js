import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Home } from './features/home/home';
import { Users } from './features/users/users';
import { Companies } from './features/companies/companies';
import { Login } from './features/login/login';
const routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: Home },
    { path: 'users', component: Users },
    { path: 'companies', component: Companies },
    { path: 'login', component: Login },
    { path: '**', redirectTo: 'home' },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule],
    })
], AppRoutingModule);
export { AppRoutingModule };
