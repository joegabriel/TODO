import { Component,Input,OnChanges,OnInit,SimpleChanges } from '@angular/core';
import {TodoMainData} from './todo.main.data.component';

@Component({
  selector: 'todo-list',
  templateUrl: './todo.list.component.html',


})
export class TodoList implements OnInit,OnChanges{
   
   todoLocalList:Array<TodoMainData>
    @Input()
    todoList:Array<TodoMainData>

    ngOnInit(){
        this.bindArrayToComponent();
    }
    constructor(){
        this.todoLocalList=new Array<TodoMainData>();
    }

    ngOnChanges(changes:SimpleChanges){
        if(changes['todoList']){
         this.bindArrayToComponent();
        }
    }

    bindArrayToComponent(){
        if(this.todoList!=undefined){
            this.todoLocalList=this.todoList;
            //this.todoLocalList.push(this.todoList);
        }
        //alert(this.todoLocalList.length);
    }

    getArrayLength(){
        //alert(this.todoLocalList.length);
    }

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
