import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
        {
            path: '',
            redirectTo: 'home',
            pathMatch: 'full',
        },
        {
          path: 'home',
          loadComponent: () => import('./tab-home/tab-home.page').then( m => m.TabHomePage)
        },
        {
          path: 'categories',
          loadComponent: () => import('./tab-categories/tab-categories.page').then( m => m.TabCategoriesPage)
        },
        {
          path: 'cart',
          loadComponent: () => import('./tab-cart/tab-cart.page').then( m => m.TabCartPage)
        },
        {
          path: 'orders',
          loadComponent: () => import('./tab-orders/tab-orders.page').then( m => m.TabOrdersPage)
        },
    ],
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./tab-home/tab-home.page').then( m => m.TabHomePage)
  },
  {
    path: 'categories',
    loadComponent: () => import('./tab-categories/tab-categories.page').then( m => m.TabCategoriesPage)
  },
  {
    path: 'cart',
    loadComponent: () => import('./tab-cart/tab-cart.page').then( m => m.TabCartPage)
  },
  {
    path: 'orders',
    loadComponent: () => import('./tab-orders/tab-orders.page').then( m => m.TabOrdersPage)
  },
  {
    path: 'schemes',
    loadComponent: () => import('../component/schemes/schemes.page').then( m => m.SchemesPage)
  },
  {
    path: 'favourites',
    loadComponent: () => import('../component/favourites/favourites.page').then( m => m.FavouritesPage)
  },
];
