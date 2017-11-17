import { Component, OnInit } from '@angular/core';
import { MainService } from "./../main.service"
import { Router } from "@angular/router"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: object  = {
    username: ""
  }

  constructor(private _api: MainService, private _router: Router) { }

  ngOnInit() {
    this.user
  }

  login(){
    this._api.signIn(this.user).subscribe((res)=>{
      if(res.json().message == "success"){
        this._router.navigate(["/"])

      }
    })
  }
}
