import { Component, OnInit } from '@angular/core';
import {Observable,Observer,Subscription,of,fromEvent,Subject} from 'rxjs'

@Component({
  selector: 'app-rx-subject',
  templateUrl: './rx-subject.component.html',
  styleUrls: ['./rx-subject.component.css']
})

export class RxSubjectComponent implements OnInit {
 
//Example with Rxjs Subject

  constructor() { }
 
  ngOnInit() {
    // Create new subject
   let sub = new Subject();
 
   sub.subscribe({
     next: (val) => console.log(val),
     error:(err) => console.log(err),
     complete:() => console.log('complete')
   });
 
   // multiple subscription
   sub.subscribe({
     next: (val) => console.log(val)
   })
 
   sub.next('next value'); // emit value
   sub.complete(); // complete
   sub.next('other value'); // this value is not emitted
  }
 
}