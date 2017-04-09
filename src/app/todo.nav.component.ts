import { Component } from '@angular/core';
import {NavData} from './todo.nav.data.component';

@Component({
  selector: 'todo-nav',
  templateUrl: './todo.nav.component.html',

})
export class TodoNavComponent {
    menuData=[ new NavData("Home"),new NavData("Schedule Tasks")];
}
