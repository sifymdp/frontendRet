import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MenuComponent } from "../menu/menu.component";

@Component({
    selector: 'app-notifications',
    templateUrl: './notifications.page.html',
    styleUrls: ['./notifications.page.scss'],
    standalone: true,
    imports: [IonicModule, CommonModule, FormsModule, MenuComponent]
})
export class NotificationsPage implements OnInit {

  unread: any[] = [
    {
      id: '1',
      title: 'Fortune',
      description: 'Good news! Enjoy a 50% discount on your favorite items, Fortune edible oil and lot more.',
      duration: 'Just now',
    },
    {
      id: '2',
      title: 'Fortune',
      description: 'Good news! Enjoy a 50% discount on your favorite items, Fortune edible oil and lot more.',
      duration: '30 mins ago',
    },
  ]
  previous: any[] = [
    {
      id: '1',
      title: 'Fortune',
      description: 'Good news! Enjoy a 50% discount on your favorite items, Fortune edible oil and lot more.',
      duration: 'Just now',
    },
    {
      id: '2',
      title: 'Fortune',
      description: 'Good news! Enjoy a 50% discount on your favorite items, Fortune edible oil and lot more.',
      duration: '30 mins ago',
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}
