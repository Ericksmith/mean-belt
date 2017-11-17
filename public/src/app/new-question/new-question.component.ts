import { Component, OnInit } from '@angular/core';
import { MainService } from "./../main.service"
import { Router } from "@angular/router"

@Component({
  selector: 'app-new-question',
  templateUrl: './new-question.component.html',
  styleUrls: ['./new-question.component.css']
})
export class NewQuestionComponent implements OnInit {

  userQuestion: object = {
    question: "",
    discription: ''
  }
  constructor(private _api: MainService, private _router: Router) { }

  ngOnInit() {
    this.userQuestion
  }

  newQuestion(){
    this._api.submitQuestion(this.userQuestion).subscribe((res)=>{
      if(res.json().message == "added"){
        this._router.navigate(['/']);
      }
    })
  }
}
