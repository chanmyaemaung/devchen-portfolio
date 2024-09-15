import {Routes} from '@angular/router';
import HomeComponent from '@pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    title: 'DevChen - Home',
    component: HomeComponent,
  },
  {
    path: 'project',
    title: 'DevChen - All Projects',
    loadComponent: () => import('@pages/project/project.component').then(m => m.ProjectComponent)
  },
  {
    path: 'blog',
    title: 'DevChen - Blog',
    loadComponent: () => import('./pages/blog/blog.component').then(m => m.BlogComponent)
  },
  {
    path: 'contact',
    title: 'DevChen - Contact',
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent)
  }
];
