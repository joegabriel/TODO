import { Component } from '@angular/core';
//import {TodoMainData} from './todo.main.data.component';

@Component({
  selector: 'todo-list',
  templateUrl: './todo.list.component.html',

})
export class TodoList{
    test:string;
    constructor(t){
        this.test=t;
    }
//    todos:Array<TodoMainData>;
//    showList:boolean;
//     constructor(t){
//         this.todos=t;
       
//     }

//     setTodoList(val){
//         //alert(val.length);
//         this.todos=val;

//     }

//     getTodoList(){
//         return this.todos;
//     }
}