import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { IonCard, IonList, IonItem, IonLabel, IonChip, IonButton, IonIcon, IonThumbnail, IonText, IonImg, IonGrid, IonRow, IonCol } from '@ionic/angular/standalone';

@Component({
  selector: 'app-order-again',
  templateUrl: './order-again.component.html',
  styleUrls: ['./order-again.component.scss'],
  standalone: true,
  imports: [IonCard, IonList, IonItem, IonLabel, IonChip, IonButton, IonIcon, IonThumbnail, IonText, IonImg, IonGrid, IonRow, IonCol]
})
export class OrderAgainComponent  implements OnInit,AfterViewInit {

  @Input() orderDetail: any

  constructor() { }

  ngOnInit() {}

  ngAfterViewInit(){
    console.log(this.orderDetail)
  }

}
