import {Component,Input} from '@angular/core';
import {TodoMainData} from './todo.main.data.component';
import {TodoList} from './todo.list.component';

@Component({
  selector: 'todo-main',
  templateUrl: './todo.main.component.html'
  

})

//This is the child Component
export class TodoMain{

    todoData:TodoMainData;
   // todoListData:TodoList;
    arrayTodo:Array<TodoMainData>;
   @Input() 
   showMainComponent:boolean;
    constructor(){
        this.showMainComponent=false;

        this.todoData=new TodoMainData("","",new Date('dd/MM/yyyy')); 
        //this.todoListData=new TodoList("");//new TodoList(new Array<TodoMainData>(this.todoData));
        
    }

    addTodo(value){
        alert(value);
    //     this.todoData.task=value;
    //     this.todoData.activityDate="";//new Date('dd/MM/yyyy').toDateString();
    //    //alert(this.todoData.activityDate);
    //     this.arrayTodo=new Array<TodoMainData>();
    //     this.arrayTodo.push(this.todoData);
    //     this.todoListData.setTodoList(this.arrayTodo);
        
        
        
    }

    getTodoList(){
       // return this.todoListData.getTodoList();
    }

}