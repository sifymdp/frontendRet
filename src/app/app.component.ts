import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { register } from 'swiper/element/bundle';
import { MenuComponent } from "./component/menu/menu.component";
import { IonHeader, IonTabs, IonToolbar, IonTitle, IonContent, IonCard, IonList, IonItem, IonLabel, IonChip, IonButton, IonIcon, IonThumbnail, IonText, IonImg, IonGrid, IonRow, IonCol, IonMenu, IonButtons, IonMenuButton, IonTabButton, IonTabBar } from '@ionic/angular/standalone';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './component/header/header.component';
register();

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    standalone: true,
    imports: [IonTabBar, IonTabButton, IonApp, IonRouterOutlet, MenuComponent,ReactiveFormsModule, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonList, IonItem, IonLabel, IonChip, IonButton, IonIcon, IonThumbnail, IonText, IonImg, IonGrid, IonRow, IonCol, IonMenu, IonButtons, IonMenuButton,HeaderComponent,IonTabs]
})
export class AppComponent {
  constructor() {}
}
