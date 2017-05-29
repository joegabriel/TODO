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
    todoListData:Array<TodoMainData>;
 
   @Input() 
   showMainComponent:boolean;
    constructor(){
        this.showMainComponent=false;

        this.todoData=new TodoMainData("","",new Date('dd/MM/yyyy')); 
        this.todoListData=new Array<TodoMainData>();
        //this.todoListData=new TodoList("");//new TodoList(new Array<TodoMainData>(this.todoData));
        
    }

    addTodo(value){
        //alert(value);
        this.todoData=new TodoMainData("","",new Date('dd/MM/yyyy'));
        let id=this.todoListData.length;
        id++;
        this.todoData.task=value;
        this.todoData.id=id;
        this.todoData.activityDate="";//new Date('dd/MM/yyyy').toDateString();
        this.todoListData.push(this.todoData);
    }

    getTodoList(){
       // return this.todoListData.getTodoList();
    }

}