import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Layout } from './pages/layout/layout';
import { Dashboard } from './pages/dashboard/dashboard';
import { Signup } from './pages/signup/signup';
import { Reservation } from './pages/reservation/reservation';
import { Menu } from './pages/menu/menu';
import { Offers } from './pages/offers/offers';
import { Contact } from './pages/contact/contact';
import { Orders } from './pages/orders/orders';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: Login,
  },
  {
    path: 'signup',
    component: Signup,
  },
  {
    path: 'layout',
    component: Layout,
    children: [
      {
        path: 'dashboard',
        component: Dashboard,
      },
      {
        path: 'reservation',
        component: Reservation,
      },
      {
        path: 'menu',
        component: Menu,
      },
      {
        path: 'offers',
        component: Offers,
      },
      {
        path: 'contact',
        component: Contact,
      },
      {
        path: 'orders',
        component: Orders,
      },
    ],
  },
];
