import { Routes } from '@angular/router';

import { HomeAboutComponent } from '../Home/Home.About.component';


export const MainRoutes:Routes=[
  {path:'Home',component:HomeAboutComponent},
  {path:'Supplier',loadChildren:'../Supplier/Supplier.module#SupplierModule'}
];  
