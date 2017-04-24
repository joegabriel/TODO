import { Component,OnInit } from '@angular/core';
import {HttpServices} from './todo.http.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[HttpServices]
})
export class AppComponent implements OnInit {
  title:string;
  constructor(private _httpService:HttpServices){
    this.title='';
  }
  ngOnInit(){
    this.getTitle();
  }
  getTitle(){
    this._httpService.getTodoData().subscribe(t=>this.title=t);
  }

}
