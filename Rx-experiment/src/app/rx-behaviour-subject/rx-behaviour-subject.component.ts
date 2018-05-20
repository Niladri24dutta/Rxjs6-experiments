import { Component, OnInit,ViewChild,AfterViewInit,ElementRef} from '@angular/core';
import {Observable,Subject,BehaviorSubject,timer,forkJoin,concat} from 'rxjs'
import { mapTo} from 'rxjs/operators';
 
@Component({
  selector: 'app-rx-behaviour-subject',
  templateUrl: './rx-behaviour-subject.component.html',
  styleUrls: ['./rx-behaviour-subject.component.css']
})
 
export class RxBehaviourSubjectComponent implements OnInit {
 
@ViewChild('testbtn') el:ElementRef;
@ViewChild('op') el2:ElementRef;
  constructor() { }
 
  ngOnInit() {
    var clickEmitted = new BehaviorSubject('Not clicked');
    let btn = this.el.nativeElement;
    let dv = this.el2.nativeElement;
    //let $stream = Observable.fromEvent(btn,'click');
    btn.addEventListener('click',()=>{
      clickEmitted.next('clicked')
    });
    clickEmitted.subscribe(
      (value) => dv.textContent = value
    );
   
    //create observable
    let $stream1 = timer(3000).pipe(mapTo({id:1}));
    let $stream2 = timer(1000).pipe(mapTo({id:2}));
 
    //use concat operator, works in order only when the previous observable is complete
 
    concat($stream1,$stream2).subscribe((val) => console.log(val));
 
    let $stream3 = timer(1000).pipe(mapTo({id:3}));
    let $stream4 = timer(2000).pipe(mapTo({id:4}));
 
      // use forkJoin operator , only emits the value at the end as an array when all the Observable are complete
     // behaves like Promise.all()
    forkJoin($stream3,$stream4).subscribe((val) => console.log(val));
 
  }
 
}