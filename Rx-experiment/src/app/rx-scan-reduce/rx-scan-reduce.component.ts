import { Component, OnInit } from '@angular/core';
import {Observable,Observer,Subscription,of} from 'rxjs'
import { reduce,scan} from 'rxjs/operators';

@Component({
  selector: 'app-rx-scan-reduce',
  templateUrl: './rx-scan-reduce.component.html',
  styleUrls: ['./rx-scan-reduce.component.css']
})
export class RxScanReduceComponent implements OnInit {
 
  constructor() { }
 
  ngOnInit() {
    let $stream = of(1,2,3,4,5);
 
    $stream
    .pipe(
      reduce((total,currVal)=>{
        return total+currVal;
       },0) // returns the final total of the array elements at the end
    )
    .subscribe({
      next: (val) => {
        console.log(val)
      }
    });
 
    $stream
    .pipe(
      scan((total,curr) => {
        return total+curr;
     },0) // returns the latest total after each emitted value, doesnot need the Observable to be completed
    )
    .subscribe({
      next: (val) => {
        console.log(val)
      }
    })
  }
 
}