import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router'
import {AppComponent} from './app.component'
import {RxDemoComponent} from './rx-demo/rx-demo.component'
import {RxObservablescratchComponent} from './rx-observablescratch/rx-observablescratch.component'
import {RxObservableintervalComponent} from './rx-observableinterval/rx-observableinterval.component'
import {RxSubjectComponent} from './rx-subject/rx-subject.component'
import {RxFilterComponent} from './rx-filter/rx-filter.component'
import {RxDebounceComponent} from './rx-debounce/rx-debounce.component'
import {RxScanReduceComponent} from './rx-scan-reduce/rx-scan-reduce.component'
import {RxPluckComponent} from './rx-pluck/rx-pluck.component'
import {RxMergemapComponent} from './rx-mergemap/rx-mergemap.component'
import {RxSwitchmapComponent} from './rx-switchmap/rx-switchmap.component'
import {RxBehaviourSubjectComponent} from './rx-behaviour-subject/rx-behaviour-subject.component' 
import {RxPairwiseComponent} from './rx-pairwise/rx-pairwise.component'
import {RxhotcoldObservableComponent} from './rxhotcold-observable/rxhotcold-observable.component'
import {NgTemplatedemoComponent} from './ng-templatedemo/ng-templatedemo.component'
import {ContenttestComponent} from './contenttest/contenttest.component'

const appRoutes : Routes = [
    
    {
        path:'rxdemo',
        component:RxDemoComponent
     },
    {
        path:'rxobservables',
        component:RxObservablescratchComponent
    },
    {
        path:'rxobsinterval',
        component:RxObservableintervalComponent
    },
    {
        path:'rxsubject',
        component:RxSubjectComponent
    },
    {
        path:'rxfilter',
        component:RxFilterComponent
    },
    {
        path:'rxdebounce',
        component:RxDebounceComponent
    },
    {
        path:'rxscan',
        component:RxScanReduceComponent
    },
    {
        path:'rxpluck',
        component:RxPluckComponent
    },
    {
        path:'rxmergemap',
        component:RxMergemapComponent
    },
    {
        path:'rxswitchmap',
        component:RxSwitchmapComponent
    },
    {
        path:'rxbehaviour',
        component:RxBehaviourSubjectComponent
    },
    {
        path:'rxpairwise',
        component:RxPairwiseComponent
    },
    {
        path:'rxhotcold',
        component:RxhotcoldObservableComponent
    },
    {
        path:'ngtemplate',
        component:NgTemplatedemoComponent
    },
    {
        path:'contentprojection',
        component:ContenttestComponent
    },
    { path: '', redirectTo: '/', pathMatch: 'full' }
 
];
 
export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes);