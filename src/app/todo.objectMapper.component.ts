import { Component,OnInit } from '@angular/core';
export interface Serializable<T> {
    deserialize(input: Object): T;
}
