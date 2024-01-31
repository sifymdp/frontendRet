import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full',
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.routes').then( m => m.routes)
  },
  {
    path: 'categories',
    loadComponent: () => import('./component/categories/categories.page').then( m => m.CategoriesPage)
  },
  {
    path: 'cart',
    loadComponent: () => import('./component/cart/cart.page').then( m => m.CartPage)
  },
  {
    path: 'orders',
    loadComponent: () => import('./component/orders/orders.page').then( m => m.OrdersPage)
  },
  {
    path: 'home',
    loadComponent: () => import('./component/home/home.page').then( m => m.HomePage)
  },
  {
    path: 'login',
    loadComponent: () => import('./component/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'register',
    loadComponent: () => import('./component/register/register.page').then( m => m.RegisterPage)
  },
  {
    path: 'otp-verification',
    loadComponent: () => import('./component/otp-verification/otp-verification.page').then( m => m.OtpVerificationPage)
  },
];
