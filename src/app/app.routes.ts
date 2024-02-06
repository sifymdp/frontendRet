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
  {
    path: 'invoices',
    loadComponent: () => import('./component/invoices/invoices.page').then( m => m.InvoicesPage)
  },
  {
    path: 'invoice-details',
    loadComponent: () => import('./component/invoice-details/invoice-details.page').then( m => m.InvoiceDetailsPage)
  },
  {
    path: 'scheme-products',
    loadComponent: () => import('./component/scheme-products/scheme-products.page').then( m => m.SchemeProductsPage)
  },
  {
    path: 'distributor-details',
    loadComponent: () => import('./component/distributor-details/distributor-details.page').then( m => m.DistributorDetailsPage)
  },
  {
    path: 'settings',
    loadComponent: () => import('./component/settings/settings.page').then( m => m.SettingsPage)
  },
  {
    path: 'about-us',
    loadComponent: () => import('./component/about-us/about-us.page').then( m => m.AboutUsPage)
  },
  {
    path: 'terms-and-conditions',
    loadComponent: () => import('./component/terms-and-conditions/terms-and-conditions.page').then( m => m.TermsAndConditionsPage)
  },
  {
    path: 'privacy-policy',
    loadComponent: () => import('./component/privacy-policy/privacy-policy.page').then( m => m.PrivacyPolicyPage)
  },
  {
    path: 'version',
    loadComponent: () => import('./component/version/version.page').then( m => m.VersionPage)
  },
  {
    path: 'notifications',
    loadComponent: () => import('./component/notifications/notifications.page').then( m => m.NotificationsPage)
  },
];
