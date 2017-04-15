import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';







import { AppComponent } from './app.component';
import {TodoNavComponent} from './todo.nav.component';
import {TodoValidate} from './todo.validate.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoNavComponent,
    TodoValidate
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
