import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CartPage } from "../../component/cart/cart.page";

@Component({
    selector: 'app-tab-cart',
    templateUrl: './tab-cart.page.html',
    styleUrls: ['./tab-cart.page.scss'],
    standalone: true,
    imports: [IonicModule, CommonModule, FormsModule, CartPage]
})
export class TabCartPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
