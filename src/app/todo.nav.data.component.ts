import { Component } from '@angular/core';


export class NavData{

    name:string;
    isValidMobileNumber:boolean;
    mobileNumber:string;
    id:number;
    constructor(n,isval,mn,i) {
        this.name=n;
        this.isValidMobileNumber=isval;
        this.mobileNumber=mn;
        this.id=i;

     }
}