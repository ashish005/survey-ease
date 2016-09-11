import {Component} from '@angular/core';
import {ROUTER_PROVIDERS, Router, Routes, ROUTER_DIRECTIVES} from '@angular/router';
import { LoginComponent, RegisterComponent, ForgotPasswordComponent, ResetPasswordComponent } from './core/core.main';
import { Test1Component } from './app-modules/test-1/test-1.component';
import { Test2Component } from './app-modules/test-2/test-2.component';

@Component({
    selector: 'survey-ease',
    templateUrl: './survey-ease-app/app.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS]
})

@Routes([
    {path: '/', component: LoginComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'forgot-password', component: ForgotPasswordComponent},
    {path: 'reset-password', component: ResetPasswordComponent},
    { path: 'test1', component: Test1Component },
    { path: 'test2', component: Test2Component }
])

export class AppComponent {
    constructor(public router: Router) {
        //this.router.navigate(['secure/test2'])
    }
}