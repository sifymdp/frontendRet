import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MenuComponent } from "../menu/menu.component";

@Component({
    selector: 'app-scheme-products',
    templateUrl: './scheme-products.page.html',
    styleUrls: ['./scheme-products.page.scss'],
    standalone: true,
    imports: [IonicModule, CommonModule, FormsModule, MenuComponent]
})
export class SchemeProductsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
