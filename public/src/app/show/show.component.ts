import { Component, OnInit } from '@angular/core';
import { MainService } from "./../main.service"
import {ActivatedRoute, Router} from "@angular/router"

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  question: any = {
    _id: "",
    question: "",
    discription: "",
    answers: [],
    _user: []
  }
  questionId: String = ""

  constructor(private _route: ActivatedRoute, private _api: MainService ) { }

  ngOnInit() {
    this.question;
    this._route.params.subscribe(params =>{
      this.questionId = params.id
      this.findQuestion()
    })
  }

  findQuestion(){
    this._api.getQuestion({id: this.questionId}).subscribe((res)=>{
      this.question = res.json();
    })
  }

  addLike(answerId){
    this._api.increaseLike({id: answerId}).subscribe((res)=>{
      this.findQuestion()
    })
  }

}
