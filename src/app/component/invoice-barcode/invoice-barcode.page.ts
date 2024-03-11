import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {NgxBarcodeScannerModule} from '@eisberg-labs/ngx-barcode-scanner';

@Component({
  selector: 'app-invoice-barcode',
  templateUrl: './invoice-barcode.page.html',
  styleUrls: ['./invoice-barcode.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, NgxBarcodeScannerModule]
})
export class InvoiceBarcodePage implements OnInit {

  declare Buffer: any
  value: any;
  isError = false;

  constructor() { }

  ngOnInit() {
  }

  onError(error: any) {
    console.error('Barcode scan is not available', error);
    this.isError = true;
  }

}
