import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.page.html',
  styleUrls: ['./search-results.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class SearchResultsPage implements OnInit {

  search_results = [
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

  constructor() { }

  ngOnInit() {
  }

  reset(event: any){
  }

  toggleLiked(order: any) {
    if (order.icon === '/assets/imgs/star-liked.svg') {
      order.icon = '/assets/imgs/star-unliked.svg';
    } else {
      order.icon = '/assets/imgs/star-liked.svg';
    }
  }

}
