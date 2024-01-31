import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { OrdersPage } from "../../component/orders/orders.page";

@Component({
    selector: 'app-tab-orders',
    templateUrl: './tab-orders.page.html',
    styleUrls: ['./tab-orders.page.scss'],
    standalone: true,
    imports: [IonicModule, CommonModule, FormsModule, OrdersPage]
})
export class TabOrdersPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
