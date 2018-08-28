import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { NewComponent } from './new/new.component';
import { CounterComponent } from './counter/counter.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { UserService } from './user.service';
import { FormsModule }   from '@angular/forms';

  

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    NewComponent,
    CounterComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
