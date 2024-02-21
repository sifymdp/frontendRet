import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonModal } from '@ionic/angular/standalone';
import { MenuComponent } from "../menu/menu.component";
import { IonicSlides } from '@ionic/angular';

@Component({
    selector: 'app-categories',
    templateUrl: './categories.page.html',
    styleUrls: ['./categories.page.scss'],
    standalone: true,
    imports: [ CommonModule, FormsModule, MenuComponent, IonModal],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CategoriesPage implements OnInit {

  @ViewChild(IonModal) modal?: IonModal;

  swiperModules = [IonicSlides];
  showMore:boolean = false;
  categories: any = [
    {
      id: 1,
      img: {
        src: '/assets/imgs/category.png',
        alt: 'Category'
      },
      name: 'Category 1'
    },
    {
      id: 2,
      img: {
        src: 'assets/imgs/category.png',
        alt: 'Category'
      },
      name: 'Category 2'
    },
    {
      id: 3,
      img: {
        src: 'assets/imgs/category.png',
        alt: 'Category'
      },
      name: 'Category 3'
    },
    {
      id: 4,
      img: {
        src: 'assets/imgs/category.png',
        alt: 'Category'
      },
      name: 'Category 4'
    },
    {
      id: 5,
      img: {
        src: 'assets/imgs/category.png',
        alt: 'Category'
      },
      name: 'Category 5'
    },
    {
      id: 6,
      img: {
        src: 'assets/imgs/category.png',
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
    },
    {
      id: 3,
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
      id: 4,
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
  ]
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

  constructor() { }

  ngOnInit() {
  }

  showMoreDesc(ev: any){
    this.showMore = !this.showMore;
  }

  reset(event: any){
  }

  openModal(){
    this.modal?.present()
  }

  add(){
    // model.dismiss();
    let msg = document.getElementById("success-message")!;
    msg.style.display = "block";
  }

  decrease(){}
  
  increase(){}

  filterTab(event: any){
  }

  toggleLiked(order: any) {
    if (order.icon === '/assets/imgs/star-liked.svg') {
      order.icon = '/assets/imgs/star-unliked.svg';
    } else {
      order.icon = '/assets/imgs/star-liked.svg';
    }
  }

}
