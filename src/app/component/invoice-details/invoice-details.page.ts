import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-invoice-details',
  templateUrl: './invoice-details.page.html',
  styleUrls: ['./invoice-details.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class InvoiceDetailsPage implements OnInit {

  order_tracking = {
    invoiced: true,
    intransit: true,
    delivered: false,
    invoiced_date: 'Jan 12, 2024 | 15:45',
    transit_date: 'Jan 12, 2024 | 15:45',
    delivered_date: 'Jan 12, 2024 | 15:45',
  }
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
      tax: '₹ 400.00',
      price: '₹ 200.00',
      qty: '40',
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
      tax: '₹ 400.00',
      price: '₹ 200.00',
      qty: '40',
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
