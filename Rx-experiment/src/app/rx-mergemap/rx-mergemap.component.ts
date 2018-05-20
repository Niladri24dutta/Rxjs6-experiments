import { Component, OnInit,ViewChild,AfterViewInit,ElementRef} from '@angular/core';
import {Observable,Observer,Subscription,of,fromEvent} from 'rxjs'
import { map, mergeMap} from 'rxjs/operators';
 
@Component({
  selector: 'app-rx-mergemap',
  templateUrl: './rx-mergemap.component.html',
  styleUrls: ['./rx-mergemap.component.css']
})
export class RxMergemapComponent implements OnInit {
 
// Example with Rxjs mergeMap operator

  @ViewChild('firstin') el1:ElementRef;
  @ViewChild('secondin') el2:ElementRef;
  @ViewChild('output') output:ElementRef;
 
  constructor() { }
 
  ngOnInit() {
    let inp1 = this.el1.nativeElement;
    let inp2 = this.el2.nativeElement;
    let op = this.output.nativeElement;
    let $stream1 = fromEvent(inp1,'input');
    let $stream2 = fromEvent(inp2,'input');
 
    $stream1
    .pipe(
      mergeMap(
        (event:any) => {
          return $stream2
          .pipe(map((val:any) => event.target.value+' '+val.target.value))  // first Obervable emits value only when inner Observable emits value and then they are merged        
        }
      )
    )
    .subscribe(
      (val) => op.textContent = val
    );
  }
 
}