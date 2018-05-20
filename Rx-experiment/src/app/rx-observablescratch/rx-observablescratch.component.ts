import { Component, OnInit,ViewChild,AfterViewInit,ElementRef} from '@angular/core';
import {Observable,Observer,Subscription,of,fromEvent} from 'rxjs'
import { map, throttleTime} from 'rxjs/operators';

@Component({
  selector: 'app-rx-observablescratch',
  templateUrl: './rx-observablescratch.component.html',
  styleUrls: ['./rx-observablescratch.component.css']
})

//2.Create Observables from scratch using Observer

export class RxObservablescratchComponent implements AfterViewInit {

  obs:Observer<any> = {
    next: (data) => console.log(data,'testing observer'),
    error: (error) => console.log(error),
    complete:() => console.log('complete')
}

  @ViewChild('testobservables') el:ElementRef;
  constructor() { }

   ngAfterViewInit(): void {
     //create new Observable from scratch
     let button = this.el.nativeElement;
     let $stream = Observable.create((obs) => {
       obs.next('a value');
       setTimeout(function(){
          obs.complete();
       },2000);
       obs.next('2nd value');
     })
      .subscribe(this.obs);

      //create Observable from button click
      let $clickStream = Observable.create((obs)=>{
         button.onclick = (event) => {
           obs.next(event.clientX);
         }
      })
      .subscribe(this.obs);

      //unsubscribe after 5 sec
      setTimeout(() => {
        $clickStream.unsubscribe();
      },5000);
  }

}
