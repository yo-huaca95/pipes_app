import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'basic',
        title:'Pipes Básicos',
        loadComponent: () => import('./pages/basic-page/basic-page')
    },
     {
        path:'numbers',
        title:'Numbers Pipe',
        loadComponent: () => import('./pages/number-page/number-page')
    },
     {
        path:'uncommon',
        title:'Pipes no tan comunes',
        loadComponent: () => import('./pages/uncommon-page/uncommon-page')
    },
     {
        path:'custom',
        title:'Pipes personalizados',
        loadComponent: () => import('./pages/custom-page/custom-page')
    },
    {
        path:'**',
        redirectTo:'basic'
    }
];
