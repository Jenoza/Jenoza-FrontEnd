import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Jenoza - Home'
  },
  {
    path: 'team',
    loadComponent: () => import('./pages/team/team.component').then(m => m.TeamComponent),
    title: 'Our Team - Jenoza'
  },
  {
    path: 'services',
    loadComponent: () => import('./pages/services/services.component').then(m => m.ServicesComponent),
    title: 'Our Services - Jenoza'
  },
  {
    path: 'news',
    loadComponent: () => import('./pages/news/news.component').then(m => m.NewsComponent),
    title: 'Latest News - Jenoza'
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent),
    title: 'Contact Us - Jenoza'
  }
];
