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

labels =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
data = {
  labels: this.labels,
  datasets: [{
    label: 'My First Dataset',
    data: [65, 59, 80, 81, 56, 55, 40, 60, 70, 50],
    backgroundColor: [
      '#97ECFF',
      '#97FFD3',
      '#E3FF74',
      '#FFE297',
      '#FCBB9F',
      '#FF9797',
      '#4FA1FE',
      '#9997FF',
      '#E497FF',
      '#FF97D5'
    ],
    barPercentage: 0.5,
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
            ticks: {
              color: '#000000',
            },
            beginAtZero: true,
          },
          x: {
            ticks: {
              color: '#000000',
            },
          }
        },
        plugins: {
          legend: {
            display: false
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
