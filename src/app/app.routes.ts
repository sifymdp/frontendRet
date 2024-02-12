import { Routes } from '@angular/router';

export const routes: Routes = [
        {
            path: '',
            redirectTo: 'home',
            pathMatch: 'full',
        },
        {
          path: 'home',
          loadComponent: () => import('./pages/tab-home/tab-home.page').then( m => m.TabHomePage)
        },
        {
          path: 'categories',
          loadComponent: () => import('./pages/tab-categories/tab-categories.page').then( m => m.TabCategoriesPage)
        },
        {
          path: 'cart',
          loadComponent: () => import('./pages/tab-cart/tab-cart.page').then( m => m.TabCartPage)
        },
        {
          path: 'orders',
          loadComponent: () => import('./pages/tab-order/tab-order.page').then( m => m.TabOrderPage)
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
  {
    path: 'all-top-deals',
    loadComponent: () => import('./component/all-top-deals/all-top-deals.page').then( m => m.AllTopDealsPage)
  },
  {
    path: 'barcode',
    loadComponent: () => import('./component/barcode/barcode.page').then( m => m.BarcodePage)
  },
  {
    path: 'order-details',
    loadComponent: () => import('./component/order-details/order-details.page').then( m => m.OrderDetailsPage)
  },
  {
    path: 'search-results',
    loadComponent: () => import('./component/search-results/search-results.page').then( m => m.SearchResultsPage)
  },
];
