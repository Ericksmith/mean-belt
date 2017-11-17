import { Component, OnInit } from '@angular/core';
import { MainService } from "./../main.service"
import { Router } from "@angular/router"

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  user: object = {
    username: ''
  }
  questions: object;
  filteredQuestions;
  searchString: String;

  constructor(private _api: MainService, private _router: Router) { }

  ngOnInit() {
    this.user
    this.searchString = ""
    this.questions = []
    this.filteredQuestions = []
    this.getUser()
    this.getQuestions()
  }

  getUser(){
    this._api.findUser().subscribe((res)=>{
      if(res.json().message == "login"){
        this._router.navigate(["/login"])
      } else {
        this.user = res.json()
      }
    })
  }

  getQuestions(){
    this._api.findQuestions().subscribe((res)=>{
      this.questions = res.json()
      this.filteredQuestions = res.json()
    })
  }

  search(){
    this.questions = this.filteredQuestions.filter((question)=>{
      return question.question.toLowerCase().includes(this.searchString) || question.discription.toLowerCase().includes(this.searchString)
    })
  }
}
