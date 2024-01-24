import { Component, Input, OnInit } from '@angular/core';
import { IonCard, IonList, IonItem, IonLabel, IonChip, IonButton, IonIcon, IonThumbnail, IonText, IonImg, IonGrid, IonRow, IonCol } from '@ionic/angular/standalone';

@Component({
  selector: 'app-top-deals',
  templateUrl: './top-deals.component.html',
  styleUrls: ['./top-deals.component.scss'],
  standalone: true,
  imports: [IonCard, IonList, IonItem, IonLabel, IonChip, IonButton, IonIcon, IonThumbnail, IonText, IonImg, IonGrid, IonRow, IonCol]
})
export class TopDealsComponent  implements OnInit {

  @Input() topDeal: any

  constructor() { }

  ngOnInit() {}

}
