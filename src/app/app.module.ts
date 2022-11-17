import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AirlingDashboardComponent } from './shared/airling-dashboard/airling-dashboard.component';
import { PassCountComponent } from './shared/pass-count/pass-count.component';
import { PassCardComponent } from './shared/pass-card/pass-card.component';

@NgModule({
  declarations: [
    AppComponent,
    AirlingDashboardComponent,
    PassCountComponent,
    PassCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
