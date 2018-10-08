import { BrowserModule } from '@angular/platform-browser';
import { HomeMasterPageComponent } from './Home.MasterPage.component';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { HomeAboutComponent } from './Home.About.component';
import {MainRoutes} from '../Routing/RoutingModule.MainRoutes';




@NgModule({
  declarations:[HomeAboutComponent,
    HomeMasterPageComponent],
  imports:[
    BrowserModule,
    RouterModule.forRoot(MainRoutes)
  ],
  providers:[],
  bootstrap:[HomeMasterPageComponent]
})
export class HomeModule{

}