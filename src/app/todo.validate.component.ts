import {Component} from '@angular/core'
import {TodoValidateService} from './services/todo.nav.valiate.service'
import{TodoValidateData} from './models/todo.validate.data.component'

@Component({
  selector: 'todo-validate',
  templateUrl: './views/TodoValidate.html',
  providers:[TodoValidateService]

})


export class TodoValidate{
    
    validateData:TodoValidateData;
    isMobileNumberValid:boolean;
    // constructor(private _todovalidateService:TodoValidateService){
    //     this.validateData.phoneNumber="";
    //     this.isMobileNumberValid=false;

    // }
    constructor(private _todovalidateService:TodoValidateService){
        this.validateData=new TodoValidateData("615-582-1080");
        this.isMobileNumberValid=false;
        
    }
     getMobileNumber(){
        return this.validateData.phoneNumber;
    }
     setMobileNumber(value){ 
        this.validateData.phoneNumber=value;
    }
    onclickButton(){
         this.isMobileNumberValid=this._todovalidateService.validatePhonenumber(this.validateData);
         //alert(this.isMobileNumberValid);
    }
}