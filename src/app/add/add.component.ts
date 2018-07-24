import { Component, OnInit } from '@angular/core';
import { NgForm } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  num1 : number;
  num2 : number;
  add(b:NgForm){
    this.num1 = b.value.n1;
    this.num2 = b.value.n2;
    alert(this.num1*1 + this.num2*1);
  }
}
