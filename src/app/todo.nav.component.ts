import { Component } from '@angular/core';
import {NavData} from './todo.nav.data.component';
import {TodoNavService} from './todo.nav.service';


@Component({
  selector: 'todo-nav',
  templateUrl: './todo.nav.component.html',
  providers:[TodoNavService]

})
export class TodoNavComponent {

  navData:NavData;
  showTodoMain: boolean;
  constructor(private _todoService:TodoNavService){
    this.navData=new NavData("",false,"");

  }
    menuData=this._todoService.getNavData();

    setnavData(value){
      this.navData.isValidMobileNumber=true;
      this.navData.mobileNumber=value;
      this.showTodoMain=false;
    }
    getnavData(){
      return this.navData;
    }

    setTodoMainComponent()
      {
          this.showTodoMain=true;
         
    }
}
