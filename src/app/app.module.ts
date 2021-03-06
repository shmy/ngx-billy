import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DefaultRouteReuseStrategy} from './billy/strategy/default-route-reuse-strategy';
import {RouteReuseStrategy} from '@angular/router';

// import { registerLocaleData } from '@angular/common';
// import zh from '@angular/common/locales/zh';
//
// registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: RouteReuseStrategy, useClass: DefaultRouteReuseStrategy },
  ]
})
export class AppModule { }
