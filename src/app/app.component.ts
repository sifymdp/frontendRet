import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
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
    imports: [IonTabBar, IonTabButton, IonApp, IonRouterOutlet, MenuComponent,ReactiveFormsModule, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonList, IonItem, IonLabel, IonChip, IonButton, IonIcon, IonThumbnail, IonText, IonImg, IonGrid, IonRow, IonCol, IonMenu, IonButtons, IonMenuButton,HeaderComponent,IonTabs, CommonModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent implements OnInit {

  tab: any;
  class: any;
  
  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((elem: any) => {
      if (elem instanceof NavigationEnd) {
        let relativeText = elem.url.replace(/\//g, '')
        if(relativeText == 'categories'){
          this.tab = 'categories'
        }else if(relativeText != 'categories'){
          this.tab = ''
        }
      }
    })
  }

}
