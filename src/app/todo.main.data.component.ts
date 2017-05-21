import { Component } from '@angular/core';


export class TodoMainData{
   task:string;
    activity:string;
    activityDate:string;
    constructor(t,a,d){
        this.task=t;
        this.activity=a;
        this.activityDate=d;
    }
}