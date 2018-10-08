
import { HomeAboutComponent } from '../Home/Home.About.component';


export const MainRoutes=[
  {path:'Home',component:HomeAboutComponent},
  {path:'Supplier',loadChildren:'../Supplier/Supplier.module#SupplierModule'}
];  
