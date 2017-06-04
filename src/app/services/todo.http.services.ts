import{Injectable} from '@angular/core'
import { Http, Response }  from '@angular/http';
import { Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {environment} from '../../environments/environment';

@Injectable()
export class HttpServices<T>{
    data:string;
    urlBase:string;
    actionTodo:string;
    constructor(private http:Http){
      this.urlBase=environment.urlBase;
      this.actionTodo="Todo";
    }
    getTodoData():Observable<T>{


         return this.http.get(this.urlBase+this.actionTodo,{headers:this.getHeaders()}).map(this.extractData).catch(this.handleError);

    }
    private getHeaders(){
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }
    
      private extractData(res: Response) {

    let body=res.json();

    let t=body;

    return t;
  }
    private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg); 
  }
  
}