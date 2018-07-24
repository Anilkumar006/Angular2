import { Component, OnInit } from '@angular/core';
import { NgForm } from '../../../node_modules/@angular/forms';


@Component({
  selector: 'app-sub',
  templateUrl: './sub.component.html',
  styleUrls: ['./sub.component.css']
})
export class SubComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  num1 : number;
  num2 : number;
  sub(s:NgForm){
    this.num1 = s.value.n1;
    this.num2 = s.value.n2;
    alert(this.num1 - this.num2);
  }

}
