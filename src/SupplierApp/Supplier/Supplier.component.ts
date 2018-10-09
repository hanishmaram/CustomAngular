import { Supplier } from './Supplier.Model';
import { Component } from '@angular/core';
import { Http } from '@angular/http';


@Component({
  templateUrl: './Supplier.html'
})
export class SupplierComponent {
  title = 'SupplierProject';
  constructor(public http:Http){}

  supplierObj:Supplier=new Supplier();
  supplierArr:Array<Supplier>=new Array<Supplier>();
  
  Add(){
    this.supplierArr.push(this.supplierObj);
    this.supplierObj=new Supplier();
  }

  PostToServer(){
    let supplierDto:any={};
    //Hack
    supplierDto.id=this.supplierObj.SupplierAmount+10;
    supplierDto.SupplierCode=this.supplierObj.SupplierCode;
    supplierDto.SupplierName=this.supplierObj.SupplierName;
    supplierDto.SupplierAmount=this.supplierObj.SupplierAmount;

    this.http.post("http://localhost:3000/Suppliers",supplierDto)
    .subscribe(
      res=>this.Success(res),
      res=>this.Error(res)
    );
  }

  Error(err){
    console.debug(err.json());
  }

  Success(res){
    this.http.get("http://localhost:3000/Suppliers")
    .subscribe(
      res=>this.Success1(res),
      res=>this.Error(res)
    );
    
  }

  Success1(r){
    this.supplierArr=r.json();//bind the grid
    this.supplierObj=new Supplier();//clear UI
  }

}
