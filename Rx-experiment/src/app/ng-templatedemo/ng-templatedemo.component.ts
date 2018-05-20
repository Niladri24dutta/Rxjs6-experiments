import { Component, OnInit,ViewChild,TemplateRef } from '@angular/core';
import {NgTemplateOutlet} from '@angular/common'
 
@Component({
  selector: 'app-ng-templatedemo',
  templateUrl: './ng-templatedemo.component.html',
  styleUrls: ['./ng-templatedemo.component.css']
})
export class NgTemplatedemoComponent implements OnInit {
 
  lessons:boolean = false;
  isLesson:boolean = false;
  availableLessons:any[];
  ctx:any;
  totalEstimate:number = 0;
  loginText:string = "Login";
  signUpText:string = "SignUp";
 
  /// using ViewChild to access the templateRef at typescript
  @ViewChild('defaultTabButtons')
  private defaultTabButtons:TemplateRef<any>;
 
  constructor() {
   this.availableLessons = ['C#','ASP','Angular','VB','Java'];
   this.totalEstimate = this.availableLessons.length;
   this.ctx = {estimate : this.totalEstimate};
  }
 
  ngOnInit() {
 
    setTimeout(() => this.isLesson = true, 3000);
    console.log(this.defaultTabButtons);
  }
 
  setStatus(){
    this.lessons = !this.lessons;
  }
 
  login(){
    console.log('login');
  }
 
  signUp(){
    console.log('signup');
  }
}