import { Component,OnInit } from '@angular/core';
import {HttpServices} from './services/todo.http.services';
import {TodoMapper}from './models/todo.nav.data.component';
import { Observable } from 'rxjs/Observable';
//import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './views/app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[HttpServices]
})
export class AppComponent implements OnInit {
  title:string;
  todoMapper:TodoMapper;
   mode = 'Observable';
  constructor(private _httpService:HttpServices<TodoMapper>){
    this.title="";
   this.todoMapper=new TodoMapper();
    
  }
  ngOnInit(){
    this.getTitle();
    //this.title=this.todoMapper.todoTask;


  }

  getTitle(){
    return this._httpService.getTodoData().subscribe(t=>this.title=t.todoTaskDate);


  }

  handler(t:TodoMapper){

    this.todoMapper=t;
    this.title=this.todoMapper.todoTaskDate;

  
  }

 

}
