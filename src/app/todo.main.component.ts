import {Component,Input} from '@angular/core';
import {TodoMainData} from './todo.main.data.component';
import {TodoList} from './todo.list.component';
import {HttpServices} from './services/todo.http.services';
import {TodoMapper} from './models/todo.nav.data.component';

@Component({
  selector: 'todo-main',
  templateUrl: './views/todo.main.component.html',
   providers:[HttpServices]

})

//This is the child Component
export class TodoMain{

    todoData:TodoMainData;
    todoListData:Array<TodoMainData>;
    todo:TodoMapper;
    response:string;
 
   @Input() 
   showMainComponent:boolean;
    constructor(private _httpService:HttpServices<TodoMapper>){
        this.showMainComponent=false;

        this.todoData=new TodoMainData("","",new Date('dd/MM/yyyy')); 
        this.todoListData=new Array<TodoMainData>();
        this.todo=new TodoMapper();
        //this.todoListData=new TodoList("");//new TodoList(new Array<TodoMainData>(this.todoData));
        
    }

    addTodo(value){
        //alert(value);
        
        this.todoData=new TodoMainData("","",new Date().toLocaleDateString());
        let id=this.todoListData.length;
        id++;
        this.todoData.task=value;
        this.todoData.id=id;
        this.todoData.activityDate=new Date().toLocaleDateString();
        this.todoListData.push(this.todoData);
        this.todo.todoTask=value;
        this.todo.isActive=true;
        this.todo.todoTaskDate=new Date().toLocaleDateString();
        this._httpService.postTodoData(this.todo).subscribe(t=>this.todo.isActive=t.isActive);
   
        

    }

    

}