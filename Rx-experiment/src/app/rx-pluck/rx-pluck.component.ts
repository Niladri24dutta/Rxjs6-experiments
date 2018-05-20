import { Component, OnInit,ViewChild,AfterViewInit,ElementRef} from '@angular/core';
import {Observable,Observer,of,fromEvent} from 'rxjs'
import { debounceTime,distinctUntilChanged,pluck} from 'rxjs/operators';
 
@Component({
  selector: 'app-rx-pluck',
  templateUrl: './rx-pluck.component.html',
  styleUrls: ['./rx-pluck.component.css']
})
export class RxPluckComponent implements OnInit {
 
  @ViewChild('test') el:ElementRef
  constructor() { }
 
  ngOnInit() {
    let btn = this.el.nativeElement;
    let $stream =  fromEvent(btn,'input')
                  .pipe(
                    pluck('target','value') ,// extract the value from the nested property object
                    debounceTime(2000), // wait for 2 sec to get the latest input
                    distinctUntilChanged() // check if the emitted values are distinct
                  )
                   .subscribe({
                    next: (val) => console.log(val)
                  });
  } 
}