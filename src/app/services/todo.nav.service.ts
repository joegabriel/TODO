import{Injectable} from '@angular/core'
import {NavData} from '../models/todo.nav.data.component';
@Injectable()
export class TodoNavService{
    menuData;
    getNavData(){
          this.menuData=[ new NavData("Home",true,"615-582-1080",1),new NavData("Schedule Tasks",true,"615-582-1080",2),new NavData("Update Phone Number",true,"",3)];
          return this.menuData;
    }
}
