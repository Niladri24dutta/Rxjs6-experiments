import { Component, OnInit,ViewChild,AfterViewInit,ElementRef} from '@angular/core';
import {Observable,Observer,Subscription,of,fromEvent,interval} from 'rxjs'
import { map, throttleTime} from 'rxjs/operators';

@Component({
  selector: 'app-rx-observableinterval',
  templateUrl: './rx-observableinterval.component.html',
  styleUrls: ['./rx-observableinterval.component.css']
})

export class RxObservableintervalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    //create Observable from a interval of 1 sec,emit value after every 1 sec
    let $testIntervalStream = interval(1000);
    let obs:Observer<number> = {
      next:(val) => console.log(val),
      error:(err) => console.log(err),
      complete:() => console.log('done')
    };

    // use .map to multiply emitted values by 3 and return a new observable
    $testIntervalStream
    .pipe(map((val) => { return val * 3;}),throttleTime(2000))
    .subscribe(obs);
  }

}