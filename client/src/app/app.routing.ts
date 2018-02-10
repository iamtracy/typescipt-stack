import { Routes } from '@angular/router';

import { SigninComponent } from './auth/signin/signin.component';

export const APP_ROUTES: Routes = [
    { path: 'signin', component: SigninComponent, pathMatch: 'full' }
];