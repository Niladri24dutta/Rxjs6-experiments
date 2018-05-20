import { Component, OnInit,ViewChild,AfterViewInit,ElementRef} from '@angular/core';
import {Observable,Observer,Subscription,of,fromEvent} from 'rxjs'
import { map,distinctUntilChanged, debounceTime} from 'rxjs/operators';
 
@Component({
  selector: 'app-rx-debounce',
  templateUrl: './rx-debounce.component.html',
  styleUrls: ['./rx-debounce.component.css']
})
export class RxDebounceComponent implements OnInit {
 
  @ViewChild('test') el:ElementRef
 
  constructor() { }
 
  ngOnInit() {
    let btn = this.el.nativeElement;
    let $stream = fromEvent(btn,'input')
                  .pipe(
                    map((event:any) => event.target.value), // get the latest value from event
                    debounceTime(2000), // wait for 2 sec to get the latest input
                    distinctUntilChanged() // check if the emitted values are distinct
                  )
                  .subscribe({
                    next: (val) => console.log(val)
                  });
  }
 
}