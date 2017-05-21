import {Component} from '@angular/core';


@Component({
  selector: 'todo-footer',
  templateUrl: './todo.main.component.html'
  

})

export class TodoFooter{

    footer:string;
    constructor(f){
        this.footer=f;
    }
}