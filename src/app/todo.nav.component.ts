import { Component } from '@angular/core';
import {NavData} from './models/todo.nav.data.component';
import {TodoNavService} from './services/todo.nav.service';
import {TodoFooter} from './todo.footer.component';


@Component({
  selector: 'todo-nav',
  templateUrl: './views/todo.nav.component.html',
  providers:[TodoNavService]

})
export class TodoNavComponent  {

  navData:NavData;
  showTodoMain: boolean;
  footerData:TodoFooter;
  constructor(private _todoService:TodoNavService){
    this.navData=new NavData("",false,"",0);
    this.footerData=new TodoFooter();
  
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

    setTodoMainComponent(id)
      {
       
        
        switch (id)
        {
          case "1":
           this.showTodoMain=false;
           break;
           case "2":
           this.showTodoMain=true;
            this.footerData.FooterValue="Test Footer";
          
           break;
           case "3":
           this.showTodoMain=false
           break
        
      }
       
         
         
    }
 
}
