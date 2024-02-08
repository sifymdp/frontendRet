import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HomePage } from "../../component/home/home.page";

@Component({
    selector: 'app-tab-home',
    templateUrl: './tab-home.page.html',
    styleUrls: ['./tab-home.page.scss'],
    standalone: true,
    imports: [IonicModule, CommonModule, FormsModule, HomePage]
})
export class TabHomePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
