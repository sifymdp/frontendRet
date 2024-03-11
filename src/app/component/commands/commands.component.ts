import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA, ViewChild, Output, EventEmitter } from '@angular/core';
import { IonModal } from '@ionic/angular/standalone';

@Component({
  selector: 'app-commands',
  templateUrl: './commands.component.html',
  styleUrls: ['./commands.component.scss'],
  standalone: true,
  imports: [ IonModal ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CommandsComponent  implements OnInit {

  @ViewChild(IonModal) modal?: IonModal;
  @Output()
onClose: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  close(){
    this.onClose.emit(true);
  }

}
