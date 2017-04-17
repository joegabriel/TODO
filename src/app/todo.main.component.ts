import {Component,Input} from '@angular/core';
import {TodoMainData} from './todo.main.data.component';

@Component({
  selector: 'todo-main',
  templateUrl: './todo.main.component.html'
  

})

//This is the child Component
export class TodoMain{

    todoData:TodoMainData;
   @Input() 
   showMainComponent:boolean;
    constructor(){
        this.showMainComponent=false;
        this.todoData=new TodoMainData([""],"",new Date('dd/MM/yyyy')); 
    }

}