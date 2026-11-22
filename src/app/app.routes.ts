import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent),
    },
    {
        path: 'projetos/regulatrack',
        loadComponent: () =>
            import('./pages/regulatrack/regulatrack.component').then((m) => m.RegulaTrackComponent),
    },
    { path: 'projects', redirectTo: '', pathMatch: 'full' },
    { path: 'blogs', redirectTo: '', pathMatch: 'full' },
    { path: '**', redirectTo: '' },
];
