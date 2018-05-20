import { Component, OnInit,ViewChild,AfterViewInit,ElementRef} from '@angular/core';
import {Observable,Observer,Subscription,fromEvent,interval} from 'rxjs'
import { map, switchMap} from 'rxjs/operators';
 
@Component({
  selector: 'app-rx-switchmap',
  templateUrl: './rx-switchmap.component.html',
  styleUrls: ['./rx-switchmap.component.css']
})
export class RxSwitchmapComponent implements OnInit {
 
  @ViewChild('test') el:ElementRef;
  constructor() { }
 
  ngOnInit() {
    let btn = this.el.nativeElement;
    let $stream = fromEvent(btn,'click');
    let $streaminterval = interval(1000);
 
    $stream
    .pipe(
      switchMap(
        (event:any) =>{
            return $streaminterval
        }
      )
    )
    .subscribe(
      (value) => console.log(value)
    )
 
  }
 
}