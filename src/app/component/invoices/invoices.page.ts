import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MenuComponent } from "../menu/menu.component";

@Component({
    selector: 'app-invoices',
    templateUrl: './invoices.page.html',
    styleUrls: ['./invoices.page.scss'],
    standalone: true,
    imports: [IonicModule, CommonModule, FormsModule, MenuComponent]
})
export class InvoicesPage implements OnInit {

  view_state = "cardview"
  angular: any;
  recent_orders = [
    {
      id: 1,
      status: 'Placed',
      order_id: 'SS902812313',
      date: 'Jan 12, 2024',
      rate: '₹ 26,000',
      items_number: '86'
    },
    {
      id: 2,
      status: 'Delivered',
      order_id: 'SS902812313',
      date: 'Jan 12, 2024',
      rate: '₹ 26,000',
      items_number: '86'
    }
  ]
  constructor() { }

  ngOnInit() {
    this.angular.module("app", ["chart.js"]).controller("chartCtrl", function ($scope: { labels: string[]; series: string[]; data: number[][]; }) {
      $scope.labels = ['2000', '2001', '2002', '2003', '2004', '2005', '2006'];
      $scope.series = ['Series A'];
    
      $scope.data = [
        [12, 19, 20, 27, 31, 28, 40]
      ];
    });
  }

  filterTab(event: any){
  }

  changeViewstate(viewState: any){
    this.view_state = viewState
  }

}
