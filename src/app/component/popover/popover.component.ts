import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { IonContent, IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
  standalone: true,
  imports: [ IonicModule ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PopoverComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
