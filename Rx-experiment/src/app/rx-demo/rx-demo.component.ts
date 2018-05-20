import { Component, OnInit,ViewChild,AfterViewInit,ElementRef} from '@angular/core';
import {Observable,Observer,Subscription,of,fromEvent} from 'rxjs'
import { map, throttleTime} from 'rxjs/operators';

@Component({

  selector: 'app-rx-demo',
  templateUrl: './rx-demo.component.html',
  styleUrls: ['./rx-demo.component.css']

})

export class RxDemoComponent implements AfterViewInit {

 //1.Create observables by creating observer

@ViewChild('test') el:ElementRef;
@ViewChild('testObserver') el2:ElementRef;

 

//create Observer for subscription
obs:Observer<any> = {
    next: (data) => console.log(data,'testing observer'),
    error: (error) => console.log(error),
    complete:() => console.log('complete')
}

 

  constructor() { }

   ngAfterViewInit(): void {
    let btn = this.el.nativeElement;
    //console.log(btn);
    let $stream = fromEvent(btn,'click')
    .pipe(throttleTime(3000),map((event:any) => event.clientY))
    .subscribe(
      (data) => console.log(data)
    );

    let btn2 = this.el2.nativeElement;
    let $observerStream = fromEvent(btn2,'click')
                          .pipe(map((event:any) => event.clientX))
                          .subscribe(this.obs);

  }

}