import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contentprojection',
  templateUrl: './contentprojection.component.html',
  styleUrls: ['./contentprojection.component.css']
})
export class ContentprojectionComponent implements OnInit {
  message:string ;
  constructor() { }

  ngOnInit() {
    this.message = "Hello Angular 6";
  }

}
