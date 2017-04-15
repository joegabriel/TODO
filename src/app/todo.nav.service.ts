import{Injectable} from '@angular/core'
import {NavData} from './todo.nav.data.component';
@Injectable()
export class TodoNavService{
    menuData;
    getNavData(){
          this.menuData=[ new NavData("Home",true,"615-582-1080"),new NavData("Schedule Tasks",true,"615-582-1080"),new NavData("Update Phone Number",true,"")];
          return this.menuData;
    }
}
