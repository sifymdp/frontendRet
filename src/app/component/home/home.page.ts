import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonSearchbar, IonMenu, IonModal, IonImg } from '@ionic/angular/standalone';
import { IonicSlides, ModalController } from '@ionic/angular';
import { OrderAgainComponent } from 'src/app/component/order-again/order-again.component';
import { TopDealsComponent } from 'src/app/component/top-deals/top-deals.component';
import { AddToCartBottomSheetComponent } from 'src/app/component/add-to-cart-bottom-sheet/add-to-cart-bottom-sheet.component';
import { CommonModule } from '@angular/common';
import { MenuComponent } from 'src/app/component/menu/menu.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonSearchbar, IonMenu, IonModal, IonImg, OrderAgainComponent, TopDealsComponent, AddToCartBottomSheetComponent, CommonModule, MenuComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePage {

  swiperModules = [IonicSlides];

  bannerImages = [
    {
      id: 1,
      src: '/assets/imgs/bannerad.png',
      alt: 'alt',
      title: 'Big Sale',
      description: 'Get all your favourites at a discount of upto 50%'
    },
    {
      id: 2,
      src: '/assets/imgs/bannerad.png',
      alt: 'alt',
      title: 'Big Sale',
      description: 'Get all your favourites at a discount of upto 50%'
    },
    {
      id: 3,
      src: '/assets/imgs/bannerad.png',
      alt: 'alt',
      title: 'Big Sale',
      description: 'Get all your favourites at a discount of upto 50%'
    },
    {
      id: 4,
      src: '/assets/imgs/bannerad.png',
      alt: 'alt',
      title: 'Big Sale',
      description: 'Get all your favourites at a discount of upto 50%'
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
      icon: '/assets/imgs/star-unliked.svg',
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
      icon: '/assets/imgs/star-unliked.svg',
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
      icon: '/assets/imgs/star-unliked.svg',
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
      icon: '/assets/imgs/star-unliked.svg',
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

  showMore:boolean = false;
  price_details = [
    {
      id: '1',
      price: '200.00',
      qty: '1 - 99'
    },
    {
      id: '2',
      price: '150.00',
      qty: '100 - 499'
    },
    {
      id: '3',
      price: '126.00',
      qty: '500 +'
    }
  ]
  order_details = 
    {
      id: 1,
      img: {
        src: 'assets/imgs/product.png',
        alt: 'product'
      },
      icon: '/assets/imgs/star-unliked.svg',
      brand_name: 'Fortune',
      product_name: 'Refined Sunflower Oil',
      unit_cross_quantity: '20 ut x 500 ml',
      rate: '₹ 126.00',
      offer: '45% Off!',
      uom: 'Each',
      qty: '40'
    }

  constructor() {}


  reset(event: any){
  }

  speechReg(){
  }

  showMoreDesc(){
    this.showMore = !this.showMore;
  }

  add(){
    // model.dismiss();
    let msg = document.getElementById("success-message")!;
    msg.style.display = "block";
  }

  decrease(){}
  
  increase(){}

  toggleLiked(order: any) {
    if (order.icon === '/assets/imgs/star-liked.svg') {
      order.icon = '/assets/imgs/star-unliked.svg';
    } else {
      order.icon = '/assets/imgs/star-liked.svg';
    }
  }

}
