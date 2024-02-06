import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MenuComponent } from "../menu/menu.component";
import { TabsPage } from "../../tabs/tabs.page";
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, MenuComponent, TabsPage]
})
export class FeedbackPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
