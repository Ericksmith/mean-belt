import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http"
import { FormsModule } from "@angular/forms"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainService } from './main.service';
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './index/index.component';
import { NewQuestionComponent } from './new-question/new-question.component';
import { ShowComponent } from './show/show.component';
import { AnswerComponent } from './answer/answer.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    IndexComponent,
    NewQuestionComponent,
    ShowComponent,
    AnswerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ MainService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
