import { Component, OnInit } from '@angular/core';
import {Observable,Observer,Subscription,interval} from 'rxjs'
import { map, throttleTime,filter} from 'rxjs/operators';

@Component({
  selector: 'app-rx-filter',
  templateUrl: './rx-filter.component.html',
  styleUrls: ['./rx-filter.component.css']
})

// Example with filter operator
export class RxFilterComponent implements OnInit {
 
  constructor() { }
 
  ngOnInit() {
    let obs = interval(1000); // create observable
    obs
    .pipe(filter((val) => val % 2 == 0),map((x) => x * 2)) // allow only even numbers and filter out the rest,multiply number
    .subscribe({
      next:(value) => console.log(value),
      error:(err) => console.log(err)
    });
 
  }
 
}