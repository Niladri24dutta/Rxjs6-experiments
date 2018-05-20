import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {routing} from './app.routing'
import { AppComponent } from './app.component';
import { RxDemoComponent } from './rx-demo/rx-demo.component';
import { RxObservablescratchComponent } from './rx-observablescratch/rx-observablescratch.component';
import { RxObservableintervalComponent } from './rx-observableinterval/rx-observableinterval.component';
import { RxSubjectComponent } from './rx-subject/rx-subject.component';
import { RxFilterComponent } from './rx-filter/rx-filter.component';
import { RxDebounceComponent } from './rx-debounce/rx-debounce.component';
import { RxScanReduceComponent } from './rx-scan-reduce/rx-scan-reduce.component';
import { RxMergemapComponent } from './rx-mergemap/rx-mergemap.component';

@NgModule({
  declarations: [
    AppComponent,
    RxDemoComponent,
    RxObservablescratchComponent,
    RxObservableintervalComponent,
    RxSubjectComponent,
    RxFilterComponent,
    RxDebounceComponent,
    RxScanReduceComponent,
    RxMergemapComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
