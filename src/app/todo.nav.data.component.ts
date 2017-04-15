import { Component } from '@angular/core';


export class NavData{

    name:string;
    isValidMobileNumber:boolean;
    mobileNumber:string;
    constructor(n,isval,mn) {
        this.name=n;
        this.isValidMobileNumber=isval;
        this.mobileNumber=mn;

     }
}