import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { OrdersPage } from "../../component/orders/orders.page";

@Component({
    selector: 'app-tab-order',
    templateUrl: './tab-order.page.html',
    styleUrls: ['./tab-order.page.scss'],
    standalone: true,
    imports: [IonicModule, CommonModule, FormsModule, OrdersPage]
})
export class TabOrderPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
