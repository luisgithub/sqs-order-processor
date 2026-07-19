import { __decorate } from "tslib";
import { Component, signal } from '@angular/core';
let App = class App {
    title = signal('benx-angular');
};
App = __decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.html',
        standalone: false,
        styleUrl: './app.css',
    })
], App);
export { App };
