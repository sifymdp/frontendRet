import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonSearchbar, IonMenu, IonModal, IonImg } from '@ionic/angular/standalone';
import { AddToCartBottomSheetComponent } from '../add-to-cart-bottom-sheet/add-to-cart-bottom-sheet.component';
import { MenuComponent } from '../menu/menu.component';
import { OrderAgainComponent } from '../order-again/order-again.component';
import { TopDealsComponent } from '../top-deals/top-deals.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonSearchbar, IonMenu, IonModal, IonImg, OrderAgainComponent, TopDealsComponent, AddToCartBottomSheetComponent, CommonModule, MenuComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HeaderComponent  implements OnInit {

  headerText: any

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((elem: any) => {
      if (elem instanceof NavigationEnd) {
        let relativeText = elem.url.replace(/\//g, '')
        switch(relativeText){
          case 'home':
            this.headerText = 'AJ Mart'
            break
          case 'categories':
            this.headerText = 'Categories'
            break
          case 'cart':
            this.headerText = 'Cart'
            break
          case 'orders':
            this.headerText = 'My Orders'
            break
          case 'order-details':
            this.headerText = 'My Orders'
            break
          case 'schemes':
            this.headerText = 'Schemas'
            break
          case 'favourites':
            this.headerText = 'Favourites'
            break
          case 'feedback':
            this.headerText = 'Feedback'
            break
          case 'feedback-edit':
            this.headerText = 'Feedback'
            break
          case 'invoices':
            this.headerText = 'My Invoices'
            break
          case 'invoice-details':
            this.headerText = 'My Invoices'
            break
          case 'scheme-products':
            this.headerText = 'Scheme Products'
            break
          case 'distributor-details':
            this.headerText = 'Distributor Details'
            break
          case 'settings':
            this.headerText = 'Settings'
            break
          case 'about-us':
            this.headerText = 'About Us'
            break
          case 'terms-and-conditions':
            this.headerText = 'Terms and Conditions'
            break
          case 'privacy-policy':
            this.headerText = 'Privacy Policy'
            break
          case 'version':
            this.headerText = 'Version'
            break
          case 'notifications':
            this.headerText = 'Notifications'
            break
          case 'all-top-deals':
            this.headerText = 'Top Deals'
            break
          case 'barcode':
            this.headerText = 'Aj Mart'
            break
        }
      }
    })
  }

  speechReg(){
  }

}
