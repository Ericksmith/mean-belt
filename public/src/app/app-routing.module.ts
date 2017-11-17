import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from "./login/login.component"
import { IndexComponent } from "./index/index.component"
import { ShowComponent } from "./show/show.component"
import { AnswerComponent } from "./answer/answer.component"
import { NewQuestionComponent } from "./new-question/new-question.component"

const routes: Routes = [
  {
    path: '',
    pathMatch: "full",
    component: IndexComponent
  },
  {
    path: 'login',
    pathMatch: "full",
    component: LoginComponent
  },
  {
    path: 'new-question',
    pathMatch: "full",
    component: NewQuestionComponent
  },
  {
    path: 'answer/:id',
    pathMatch: "full",
    component: AnswerComponent
  },
  {
    path: 'show/:id',
    pathMatch: "full",
    component: ShowComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
