import { Component, Input, OnInit, ViewChild, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicSlides, ModalController } from '@ionic/angular';
import { IonCard, IonList, IonItem, IonLabel, IonChip, IonButton, IonIcon, IonThumbnail, IonText, IonImg, IonGrid, IonRow, IonCol, IonAccordion, IonAccordionGroup, IonToast, IonModal } from '@ionic/angular/standalone';

@Component({
  selector: 'app-top-deals',
  templateUrl: './top-deals.component.html',
  styleUrls: ['./top-deals.component.scss'],
  standalone: true,
  imports: [IonCard, IonList, IonItem, IonLabel, IonChip, IonButton, IonIcon, IonThumbnail, IonText, IonImg, IonGrid, IonRow, IonCol, IonAccordion, IonAccordionGroup, IonToast, IonModal, CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TopDealsComponent  implements OnInit {

  swiperModules = [IonicSlides];
  @ViewChild(IonModal) modal?: IonModal;
  @Input() topDeal: any

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
  order_details = 
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

  product_images: any[] = [
    {
      img: {
        src: 'assets/imgs/product.png',
        alt: 'product'
      }
    },
    {
      img: {
        src: 'assets/imgs/product.png',
        alt: 'product'
      }
    },
    {
      img: {
        src: 'assets/imgs/product.png',
        alt: 'product'
      }
    },
  ];

  constructor() { }

  ngOnInit() {
    
  }

  reset(event: any){
  }

  openModal(){
    this.modal?.present()
  }

  add(){
    // model.dismiss();
    let msg = document.getElementById("success-message")!;
    msg.style.display = "block";
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
