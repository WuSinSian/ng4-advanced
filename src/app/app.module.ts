import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { CardsComponent } from './cards/cards.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
//import { ChartsModule } from './charts/charts.module';  //delayloading
import { LoginGuard } from './login.guard';


@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    CardsComponent,
    DashboardComponent,
    LoginComponent,
    LayoutComponent,

  ],
  imports: [
    BrowserModule,
   // ChartsModule, //delayloading
    AppRoutingModule
  ],
  providers: [LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
