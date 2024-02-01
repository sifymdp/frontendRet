import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: '',
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
  {
    path: 'schemes',
    loadComponent: () => import('./component/schemes/schemes.page').then( m => m.SchemesPage)
  },
  {
    path: 'favourites',
    loadComponent: () => import('./component/favourites/favourites.page').then( m => m.FavouritesPage)
  },
  {
    path: 'feedback',
    loadComponent: () => import('./component/feedback/feedback.page').then( m => m.FeedbackPage)
  },
  {
    path: 'feedback-edit',
    loadComponent: () => import('./component/feedback-edit/feedback-edit.page').then( m => m.FeedbackEditPage)
  },
];
