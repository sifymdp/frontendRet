import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MenuComponent } from "../menu/menu.component";

@Component({
    selector: 'app-cart',
    templateUrl: './cart.page.html',
    styleUrls: ['./cart.page.scss'],
    standalone: true,
    imports: [IonicModule, CommonModule, FormsModule, MenuComponent]
})
export class CartPage implements OnInit {

  orders = [
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
      uom: 'Each',
      qty: '40',
      offer: 'Add 12 more to get 35% Off',
    }
  ]
  constructor() { }

  ngOnInit() {
  }

  decrease(){}
  
  increase(){}

}
