import{Injectable} from '@angular/core'
import {TodoValidateData}from './todo.validate.data.component'
@Injectable(

)

export class TodoValidateService{

    validatePhonenumber(number:TodoValidateData){
        number.phoneNumber="615-582-1080";
        return true;
    }
}