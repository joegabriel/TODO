import { Component,Input,OnChanges,OnInit,SimpleChanges } from '@angular/core';
import {TodoMainData} from './todo.main.data.component';

@Component({
  selector: 'todo-list',
  templateUrl: './todo.list.component.html',


})
export class TodoList implements OnInit,OnChanges{
   
    @Input()
    todoList:Array<TodoMainData>

    ngOnInit(){
        //this.bindArrayToComponent();
    }
    constructor(){

    }

    ngOnChanges(changes:SimpleChanges){
        if(changes['todoList']){
          // this.bindArrayToComponent();
        }
    }

    // bindArrayToComponent(){
    //     if(this.todoList!=undefined)
    //    alert(this.todoList.length);

    // }

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
