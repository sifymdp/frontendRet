import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MenuComponent } from "../menu/menu.component";
import { IonicSlides } from '@ionic/angular';

@Component({
    selector: 'app-categories',
    templateUrl: './categories.page.html',
    styleUrls: ['./categories.page.scss'],
    standalone: true,
    imports: [IonicModule, CommonModule, FormsModule, MenuComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CategoriesPage implements OnInit {

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
    },
    {
      id: 3,
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
      id: 4,
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
  ]

  constructor() { }

  ngOnInit() {
  }

  showMoreDesc(ev: any){
    this.showMore = !this.showMore;
  }

  reset(event: any){
  }

  filterTab(event: any){

  }

}
