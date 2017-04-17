import { Component } from '@angular/core';


export class TodoMainData{
   task:string;
    activity:Array<string>;
    activityDate:Date;
    constructor(t,a,d){
        this.task=t;
        this.activity=a;
        this.activityDate=d;
    }
}