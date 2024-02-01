import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-feedback-edit',
  templateUrl: './feedback-edit.page.html',
  styleUrls: ['./feedback-edit.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class FeedbackEditPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
