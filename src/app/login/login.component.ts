import { Component, OnInit } from '@angular/core';
import { NgForm } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  username :any;
  password : any;
  login(l:NgForm){
    this.username= l.value.username;
    this.password = l.value.password;
    alert(this.username);
  }
}
