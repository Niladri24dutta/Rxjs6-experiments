import { Component, OnInit,ViewChild,AfterViewInit,ElementRef} from '@angular/core';
import {Observable,fromEvent,interval,combineLatest} from 'rxjs'
import { map, pairwise} from 'rxjs/operators';
 
@Component({
  selector: 'app-rx-pairwise',
  templateUrl: './rx-pairwise.component.html',
  styleUrls: ['./rx-pairwise.component.css']
})
export class RxPairwiseComponent implements OnInit {
 
  @ViewChild('testbtn') el:ElementRef;
  constructor() { }
 
  ngOnInit() {
    let btn = this.el.nativeElement;
    let $stream = fromEvent(btn,'click')
                  .pipe(
                    map((event:any) => event.clientX),
                    pairwise()  // return the emitted value of the Observable as well the previous value as array
                  )
                  .subscribe(val => console.log(val));
 
    // Using combineLatest
    let $interval1 = interval(1000);
    let $interval2 = interval(3000);
    // notify when any Observable emits a value and also emit the latest value from each Observable as an array
              combineLatest($interval1,$interval2)
              .subscribe((val)=> console.log(val));
      
  } 
}