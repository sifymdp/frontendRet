import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MenuComponent } from "../menu/menu.component";

@Component({
    selector: 'app-distributor-details',
    templateUrl: './distributor-details.page.html',
    styleUrls: ['./distributor-details.page.scss'],
    standalone: true,
    imports: [IonicModule, CommonModule, FormsModule, MenuComponent]
})
export class DistributorDetailsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
