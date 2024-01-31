import { Component, OnInit } from '@angular/core';
import { IonHeader, IonList, IonListHeader, IonLabel, IonContent, IonButton, IonText, IonImg, IonGrid, IonRow, IonCol, IonItem, IonAccordionGroup, IonAccordion, IonToast } from '@ionic/angular/standalone';

@Component({
  selector: 'app-add-to-cart-bottom-sheet',
  templateUrl: './add-to-cart-bottom-sheet.component.html',
  styleUrls: ['./add-to-cart-bottom-sheet.component.scss'],
  standalone: true,
  imports: [ IonHeader, IonList, IonListHeader, IonLabel, IonContent, IonButton, IonText, IonImg, IonGrid, IonRow, IonCol, IonItem, IonAccordionGroup, IonAccordion, IonToast ]
})
export class AddToCartBottomSheetComponent  implements OnInit {

  showMore:boolean = false;
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

  constructor() { }

  ngOnInit() {}

  showMoreDesc(){
    this.showMore = !this.showMore;
  }

  add(){
  }

  decrease(){}
  
  increase(){}

}
