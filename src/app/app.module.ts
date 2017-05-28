import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';







import { AppComponent } from './app.component';
import {TodoNavComponent} from './todo.nav.component';
import {TodoValidate} from './todo.validate.component';
import {TodoMain} from './todo.main.component';
import{TodoFooter} from './todo.footer.component';
import{TodoList} from './todo.list.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoNavComponent,
    TodoValidate,
    TodoMain,
    TodoFooter,
    TodoList

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
