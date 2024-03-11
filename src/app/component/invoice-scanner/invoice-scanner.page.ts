import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-invoice-scanner',
  templateUrl: './invoice-scanner.page.html',
  styleUrls: ['./invoice-scanner.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class InvoiceScannerPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  submit(){}

}
