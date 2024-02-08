import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CategoriesPage } from "../../component/categories/categories.page";

@Component({
    selector: 'app-tab-categories',
    templateUrl: './tab-categories.page.html',
    styleUrls: ['./tab-categories.page.scss'],
    standalone: true,
    imports: [IonicModule, CommonModule, FormsModule, CategoriesPage]
})
export class TabCategoriesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
