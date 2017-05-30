import { Component } from '@angular/core';


export class TodoMainData{
   task:string;
    activity:string;
    activityDate:string;
    id:number
    constructor(t,a,d){
        this.task=t;
        this.activity=a;
        this.activityDate=d;
        this.id=0;
    }
}