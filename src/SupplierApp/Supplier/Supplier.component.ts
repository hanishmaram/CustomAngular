import { Supplier } from './Supplier.Model';
import { Component } from '@angular/core';


@Component({
  templateUrl: './Supplier.html'
})
export class SupplierComponent {
  title = 'SupplierProject';

  supplierObj:Supplier=new Supplier();
  supplierArr:Array<Supplier>=new Array<Supplier>();
  
  Add(){
    this.supplierArr.push(this.supplierObj);
    this.supplierObj=new Supplier();
  }
}
