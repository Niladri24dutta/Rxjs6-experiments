import { Component, OnInit,Input,TemplateRef } from '@angular/core';
 
@Component({
  selector: 'app-tabcontainer',
  templateUrl: './tabcontainer.component.html',
  styleUrls: ['./tabcontainer.component.css']
})
export class TabcontainerComponent implements OnInit {
 
  @Input() headerTemplate : TemplateRef<any>;
  constructor() { }
 
  ngOnInit() {
  }
 
}
 