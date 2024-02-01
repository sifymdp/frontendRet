import { Component, OnInit } from '@angular/core';
import { IonHeader, IonList, IonListHeader, IonLabel, IonContent, IonButton, IonText, IonImg, IonGrid, IonRow, IonCol, IonItem, IonAccordionGroup, IonAccordion, IonToast, IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-add-to-cart-bottom-sheet',
  templateUrl: './add-to-cart-bottom-sheet.component.html',
  styleUrls: ['./add-to-cart-bottom-sheet.component.scss'],
  standalone: true,
  imports: [ IonHeader, IonList, IonListHeader, IonLabel, IonContent, IonButton, IonText, IonImg, IonGrid, IonRow, IonCol, IonItem, IonAccordionGroup, IonAccordion, IonToast, IonIcon ]
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
  order_again = 
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
    }

  constructor() { }

  ngOnInit() {}

  showMoreDesc(){
    this.showMore = !this.showMore;
  }

  add(){
  }

  decrease(){}
  
  increase(){}

  toggleLiked(order: any) {
    if (order.icon === '/assets/imgs/star-liked.svg') {
      order.icon = '/assets/imgs/star-unliked.svg';
    } else {
      order.icon = '/assets/imgs/star-liked.svg';
    }
  }

}
