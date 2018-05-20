import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {routing} from './app.routing'
import { AppComponent } from './app.component';
import { RxDemoComponent } from './rx-demo/rx-demo.component';
import { RxObservablescratchComponent } from './rx-observablescratch/rx-observablescratch.component';

@NgModule({
  declarations: [
    AppComponent,
    RxDemoComponent,
    RxObservablescratchComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
