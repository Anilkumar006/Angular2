import { Component, OnInit } from '@angular/core';
import { NgForm } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  Name :any;
  Email : any;
  contact(b:NgForm){
    this.Name= b.value.text;
    this.Email = b.value.email;
    alert(this.Name);
}
}
