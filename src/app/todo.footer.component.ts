import {Component} from '@angular/core'


@Component({

  selector: 'todo-footer',
  templateUrl: './todo.footer.component.html'

})


export class TodoFooter{
    
 
      footerText:string;

    constructor(){
        this.footerText="Default Footer";
    }

    get FooterValue(){
        
        return this.footerText;
    }
set FooterValue(value){
    this.footerText=value;
}

   
}