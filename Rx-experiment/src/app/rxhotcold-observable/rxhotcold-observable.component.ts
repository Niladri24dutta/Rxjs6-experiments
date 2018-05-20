import { Component, OnInit,ViewChild,AfterViewInit,ElementRef} from '@angular/core';
import {Observable,Observer,Subject,interval,ConnectableObservable} from 'rxjs'
import {take,publish} from 'rxjs/operators';
 
@Component({
  selector: 'app-rxhotcold-observable',
  templateUrl: './rxhotcold-observable.component.html',
  styleUrls: ['./rxhotcold-observable.component.css']
})
export class RxhotcoldObservableComponent implements OnInit {
 
  constructor() { }
 
  ngOnInit() {
 
    // creating Cold observable
    let $stream = interval(1000).pipe(take(6));
 
    $stream.subscribe( val => console.log('sub 1 : '+val));
   // each subscriber has it's own execution context of the Observable , and
   // the Observable starts emitting value only when there is any subscriber . Each subscriber receives the end to end data
   // from Observable
    setTimeout(function() {
      $stream.subscribe( value => console.log('sub 2: '+value))
    }, 2000);
 
    //Creating hot Observable
    let $hotstream = <ConnectableObservable<any>>interval(1000)
                    .pipe(take(6),publish());

    $hotstream.connect()

    // creating subscribers
    // Observable emits value regardless of the subscriber joined, each subscriber receives the same data from
    // Observable depending on the time of subscription
    setTimeout(function(){
        $hotstream.subscribe(val => console.log('subs 1:',val))
    },2700);
   setTimeout(function(){
        $hotstream.subscribe(val => console.log('subs 2:',val))
    },3700);
 
    // creating lazy loaded hot Observable 
   // which emits data only if there is atleast 1 subscriber
   //The first subscriber receives the end to end data but after that any subscriber receives data from time of subscription
   
    let source =  <ConnectableObservable<any>> interval(1000)
                  .pipe(
                    take(6),
                    publish()
                  );
   source.refCount();
    setTimeout(function(){
        source.subscribe(val => console.log('subs 1:',val))
    },2700);
   setTimeout(function(){
        source.subscribe(val => console.log('subs 2:',val))
    },4100);
  }
 
  
 
}