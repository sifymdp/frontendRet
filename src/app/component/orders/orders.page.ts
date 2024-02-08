import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MenuComponent } from "../menu/menu.component";
import { Chart, registerables } from "chart.js";

@Component({
    selector: 'app-orders',
    templateUrl: './orders.page.html',
    styleUrls: ['./orders.page.scss'],
    standalone: true,
    imports: [IonicModule, CommonModule, FormsModule, MenuComponent]
})
export class OrdersPage implements OnInit {

  chart: any;
  view_state = "cardview"
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

labels =[1, 2, 3, 4, 5, 6, 7];
data = {
  labels: this.labels,
  datasets: [{
    label: 'My First Dataset',
    data: [65, 59, 80, 81, 56, 55, 40],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(201, 203, 207, 0.2)'
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
      'rgb(201, 203, 207)'
    ],
    borderWidth: 1
  }]
};

  constructor() { }

  ngOnInit() {
    Chart.register(...registerables)
  }

  ngAfterViewInit(){
    this.initiateChart()
  }

  initiateChart(){
    this.chart = new Chart("canvas", {
      type: "bar",
      data: this.data,
      options: {
        scales: {
          y: {
            beginAtZero: true
          }    
        }
      }
    });
  }

  filterTab(event: any){
  }

  changeViewstate(viewState: any){
    this.view_state = viewState
  }

}
