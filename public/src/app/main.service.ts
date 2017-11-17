import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class MainService {

  constructor(private _http: Http) { }

  signIn(userData){
    return this._http.post('/login', userData);
  }

  findUser(){
    return this._http.get('/getUser');
  }

  submitQuestion(question){
    return this._http.post('/newQuestion', question);
  }

  findQuestions(){
    return this._http.get('/getQuestions');
  }

  getQuestion(questId){
    return this._http.post('/oneQuestion', questId);
  }

  addAnswer(answer){
    return this._http.post('/addAnswer', answer);
  }

  increaseLike(answer){
    return this._http.post('/addlike', answer)
  }

}
