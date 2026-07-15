import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./PAGES/home/home.component').then(m => m.HomeComponent)
    },

    //MARK: AUTHENTICATION
    {
        path: 'login',
        loadComponent: () => import('./PAGES/authentication/login/login.component').then(m => m.LoginComponent)
    },

    {
        path: '**',
        loadComponent: () => import('./PAGES/authentication/page404/page404.component').then(m => m.Page404Component)
    }
];
