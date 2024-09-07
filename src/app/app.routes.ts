import {Routes} from '@angular/router';
import {PortfolioComponent} from '@pages/portfolio/portfolio.component';
import {ServiceComponent} from '@pages/service/service.component';
import {BlogComponent} from '@pages/blog/blog.component';
import {ContactComponent} from '@pages/contact/contact.component';
import HomeComponent from '@pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    title: 'DevChen - Home',
    component: HomeComponent,
    children: []
  },
  {
    path: 'portfolio',
    title: 'DevChen - Portfolio',
    component: PortfolioComponent,
    children: []
  },
  {
    path: 'service',
    title: 'DevChen - Service',
    component: ServiceComponent,
    children: []
  },
  {
    path: 'blog',
    title: 'DevChen - Blog',
    component: BlogComponent,
    children: []
  },
  {
    path: 'contact',
    title: 'DevChen - Contact',
    component: ContactComponent,
    children: []
  }
];
