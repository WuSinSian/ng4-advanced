import { NgModule, Component } from '@angular/core';
import { Route, Routes, RouterModule, CanActivate } from '@angular/router';
import { fallBackRoute } from './shared/fallBack-Route';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardsComponent } from './cards/cards.component';
import { FlotComponent } from './charts/flot/flot.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './login.guard';
import { ClassComponent } from './forms/class/class.component';
import { ReactiveComponent } from './forms/reactive/reactive.component';


const routes: Routes = [
  {path :'',component:LayoutComponent,
    children:[
        { path: '', redirectTo: 'forms/reactive' , pathMatch: 'full' },
        {path: 'dashboard', component: DashboardComponent},
        { path: 'cards/:type', component: CardsComponent, canActivate: [LoginGuard] },
        { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
        { path: 'forms/classic', component: ClassComponent },
        { path: 'forms/reactive', component: ReactiveComponent }

    ]
  },
  {path:'login', component:LoginComponent} ,
  fallBackRoute
];

@NgModule({
  imports: [RouterModule.forRoot(routes , {
    enableTracing: false ,
    useHash : true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
