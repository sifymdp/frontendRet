import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonSearchbar, IonMenu, IonModal, IonImg } from '@ionic/angular/standalone';
import { IonicSlides } from '@ionic/angular';
import { OrderAgainComponent } from 'src/app/component/order-again/order-again.component';
import { TopDealsComponent } from 'src/app/component/top-deals/top-deals.component';
import { AddToCartBottomSheetComponent } from 'src/app/component/add-to-cart-bottom-sheet/add-to-cart-bottom-sheet.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonSearchbar, IonMenu, IonModal, IonImg, OrderAgainComponent, TopDealsComponent, AddToCartBottomSheetComponent, CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePage {

  swiperModules = [IonicSlides];

  bannerImages = [
    {
      id: 1,
      src: '/assets/imgs/Frame 193.png',
      alt: 'alt'
    },
    {
      id: 2,
      src: '/assets/imgs/Frame 193.png',
      alt: 'alt'
    },
    {
      id: 3,
      src: '/assets/imgs/Frame 193.png',
      alt: 'alt'
    },
    {
      id: 4,
      src: '/assets/imgs/Frame 193.png',
      alt: 'alt'
    }
  ]

  categories: any = [
    {
      id: 1,
      img: {
        src: '/assets/imgs/alt-icon.png',
        alt: 'Category'
      },
      name: 'Category 1'
    },
    {
      id: 2,
      img: {
        src: '/assets/imgs/alt-icon.png',
        alt: 'Category'
      },
      name: 'Category 2'
    },
    {
      id: 3,
      img: {
        src: '/assets/imgs/alt-icon.png',
        alt: 'Category'
      },
      name: 'Category 3'
    },
    {
      id: 4,
      img: {
        src: '/assets/imgs/alt-icon.png',
        alt: 'Category'
      },
      name: 'Category 4'
    },
    {
      id: 5,
      img: {
        src: '/assets/imgs/alt-icon.png',
        alt: 'Category'
      },
      name: 'Category 5'
    },
    {
      id: 6,
      img: {
        src: '/assets/imgs/alt-icon.png',
        alt: 'Category'
      },
      name: 'Category 6'
    }
  ]

  order_again = [
    {
      id: 1,
      img: {
        src: 'assets/imgs/product.png',
        alt: 'product'
      },
      brand_name: 'Fortune',
      product_name: 'Refined Sunflower Oil',
      unit_cross_quantity: '20 ut x 500 ml',
      rate: '₹ 126.00',
      offer: '45% Off!',
      uom: 'Each',
      qty: '40'
    },
    {
      id: 2,
      img: {
        src: 'assets/imgs/product.png',
        alt: 'product'
      },
      brand_name: 'Fortune',
      product_name: 'Refined Sunflower Oil',
      unit_cross_quantity: '20 ut x 500 ml',
      rate: '₹ 126.00',
      offer: '45% Off!',
      uom: 'Each',
      qty: '40'
    }
  ]

  top_deals = [
    {
      id: 1,
      img: {
        src: 'assets/imgs/product.png',
        alt: 'product'
      },
      brand_name: 'Fortune',
      product_name: 'Refined Sunflower Oil',
      unit_cross_quantity: '20 ut x 500 ml',
      rate: '₹ 126.00',
      offer: '45% Off!'
    },
    {
      id: 2,
      img: {
        src: 'assets/imgs/product.png',
        alt: 'product'
      },
      brand_name: 'Fortune',
      product_name: 'Refined Sunflower Oil',
      unit_cross_quantity: '20 ut x 500 ml',
      rate: '₹ 126.00',
      offer: '45% Off!'
    }
  ]

  recent_orders = [
    {
      id: 1,
      status: 'Placed',
      order_id: 'SS902812313',
      date: 'Jan 12, 2024',
      rate: '₹ 26,000',
      items_number: '86'
    },
    {
      id: 2,
      status: 'Delivered',
      order_id: 'SS902812313',
      date: 'Jan 12, 2024',
      rate: '₹ 26,000',
      items_number: '86'
    }
  ]

  constructor() {}


  reset(event: any){

  }

}
