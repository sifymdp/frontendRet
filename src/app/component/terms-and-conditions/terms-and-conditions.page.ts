import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MenuComponent } from "../menu/menu.component";

@Component({
    selector: 'app-terms-and-conditions',
    templateUrl: './terms-and-conditions.page.html',
    styleUrls: ['./terms-and-conditions.page.scss'],
    standalone: true,
    imports: [IonicModule, CommonModule, FormsModule, MenuComponent]
})
export class TermsAndConditionsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
