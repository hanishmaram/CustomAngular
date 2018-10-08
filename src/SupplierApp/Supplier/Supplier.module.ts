import {CommonModule} from '@angular/common';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { SupplierComponent } from './Supplier.component';
import { RouterModule } from '@angular/router';
import { SupplierRoutes } from '../Routing/RoutingModule.SupplierRoutes';

@NgModule({
  declarations: [
    SupplierComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(SupplierRoutes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [SupplierComponent]
})
export class SupplierModule { }
