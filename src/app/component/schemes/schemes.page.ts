import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MenuComponent } from "../menu/menu.component";
import { TabsPage } from "../../tabs/tabs.page";

@Component({
    selector: 'app-schemes',
    templateUrl: './schemes.page.html',
    styleUrls: ['./schemes.page.scss'],
    standalone: true,
    imports: [IonicModule, CommonModule, FormsModule, MenuComponent, TabsPage]
})
export class SchemesPage implements OnInit {

  schemes = [
    {
      id: 1,
      img: {
        src: '/assets/imgs/big-sale-off.png',
        alt: 'Big Sale'
      },
      name: 'Scheme Name',
      description: 'one line description',
      valid_till: '31/01/2024'
    },
    {
      id: 2,
      img: {
        src: '/assets/imgs/big-sale-off.png',
        alt: 'Big Sale'
      },
      name: 'Scheme Name',
      description: 'one line description',
      valid_till: '31/01/2024'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
