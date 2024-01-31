import { Component, Input, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonList, IonItem, IonLabel, IonChip, IonButton, IonIcon, IonThumbnail, IonText, IonImg, IonGrid, IonRow, IonCol, IonAccordionGroup, IonAccordion } from '@ionic/angular/standalone';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonList, IonItem, IonLabel, IonChip, IonButton, IonIcon, IonThumbnail, IonText, IonImg, IonGrid, IonRow, IonCol, IonAccordionGroup, IonAccordion]
})
export class MenuComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
