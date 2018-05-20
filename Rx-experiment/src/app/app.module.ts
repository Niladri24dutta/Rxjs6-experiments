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
import { RxPluckComponent } from './rx-pluck/rx-pluck.component';
import { RxSwitchmapComponent } from './rx-switchmap/rx-switchmap.component';
import { RxBehaviourSubjectComponent } from './rx-behaviour-subject/rx-behaviour-subject.component';
import { RxPairwiseComponent } from './rx-pairwise/rx-pairwise.component';
import { RxhotcoldObservableComponent } from './rxhotcold-observable/rxhotcold-observable.component';
import { NgTemplatedemoComponent } from './ng-templatedemo/ng-templatedemo.component';
import { TabcontainerComponent } from './tabcontainer/tabcontainer.component';

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
    RxMergemapComponent,
    RxPluckComponent,
    RxSwitchmapComponent,
    RxBehaviourSubjectComponent,
    RxPairwiseComponent,
    RxhotcoldObservableComponent,
    NgTemplatedemoComponent,
    TabcontainerComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
