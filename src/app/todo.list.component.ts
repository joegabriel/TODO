import { Component,Input,OnChanges,OnInit,SimpleChanges } from '@angular/core';
import {TodoMainData} from './todo.main.data.component';

@Component({
  selector: 'todo-list',
  templateUrl: './views/todo.list.component.html',


})
export class TodoList implements OnInit,OnChanges{
   
   todoLocalList:Array<TodoMainData>
   todostate:boolean
    @Input()
    todoList:Array<TodoMainData>

    ngOnInit(){
        this.bindArrayToComponent();
    }
    constructor(){
        this.todoLocalList=new Array<TodoMainData>();
        this.todostate=false;
    }

    ngOnChanges(changes:SimpleChanges){
        if(changes['todoList']){
         this.bindArrayToComponent();
        }
    }

    bindArrayToComponent(){
        if(this.todoList!=undefined){
            this.todoLocalList=this.todoList;
 
        }

    }


    }

