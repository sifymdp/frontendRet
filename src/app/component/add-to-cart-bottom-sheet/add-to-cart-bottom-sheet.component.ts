import { Component, OnInit } from '@angular/core';
import { IonHeader, IonList, IonListHeader, IonLabel, IonContent, IonButton, IonText, IonImg, IonGrid, IonRow, IonCol, IonItem } from '@ionic/angular/standalone';

@Component({
  selector: 'app-add-to-cart-bottom-sheet',
  templateUrl: './add-to-cart-bottom-sheet.component.html',
  styleUrls: ['./add-to-cart-bottom-sheet.component.scss'],
  standalone: true,
  imports: [ IonHeader, IonList, IonListHeader, IonLabel, IonContent, IonButton, IonText, IonImg, IonGrid, IonRow, IonCol, IonItem ]
})
export class AddToCartBottomSheetComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
