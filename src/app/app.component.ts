import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { register } from 'swiper/element/bundle';
import { MenuComponent } from "./component/menu/menu.component";
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonList, IonItem, IonLabel, IonChip, IonButton, IonIcon, IonThumbnail, IonText, IonImg, IonGrid, IonRow, IonCol, IonMenu, IonButtons, IonMenuButton } from '@ionic/angular/standalone';

register();

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    standalone: true,
    imports: [IonApp, IonRouterOutlet, MenuComponent, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonList, IonItem, IonLabel, IonChip, IonButton, IonIcon, IonThumbnail, IonText, IonImg, IonGrid, IonRow, IonCol, IonMenu, IonButtons, IonMenuButton]
})
export class AppComponent {
  constructor() {}
}
