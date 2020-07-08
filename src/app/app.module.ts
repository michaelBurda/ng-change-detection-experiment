import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DemoDefaultComponent } from './demo-default/demo-default.component';
import { DemoOnPushComponent } from './demo-on-push/demo-on-push.component';
import { DemoCdrComponent } from './demo-cdr/demo-cdr.component';
import { DemoCdrMComponent } from './demo-cdr-m/demo-cdr-m.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoDefaultComponent,
    DemoOnPushComponent,
    DemoCdrComponent,
    DemoCdrMComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
