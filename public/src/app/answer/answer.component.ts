import { Component, OnInit } from '@angular/core';
import { MainService } from "./../main.service"
import {ActivatedRoute, Router} from "@angular/router"

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {

  userAnswer = {
    answer: "",
    details: ""
  }

  question: any;
  questionId: String;

  constructor(private _route: ActivatedRoute, private _router: Router, private _api: MainService) { }

  ngOnInit() {
    this._route.params.subscribe(params =>{
      this.questionId = params.id
      this.question
      this.findQuestion()
    })
  }

  findQuestion(){
    this._api.getQuestion({id: this.questionId}).subscribe((res)=>{
      this.question = res.json();
    })
  }

  newAnswer(){
    this._api.addAnswer({question: this.questionId, answer: this.userAnswer.answer, details: this.userAnswer.details}).subscribe((res)=>{
      if(res.json().message == 'success'){
        this._router.navigate(['/']);
      }
    })
  }

}
