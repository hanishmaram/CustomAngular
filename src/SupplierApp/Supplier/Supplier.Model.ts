import {NgForm,FormGroup,FormControl,Validators,FormBuilder} from '@angular/forms';
export class Supplier{
  formGroup:FormGroup=null;
  constructor(){
    let _builder=new FormBuilder();
    this.formGroup=_builder.group({});

    this.formGroup.addControl('SupplierNameControl',new FormControl('',Validators.required));
    
    let validationCollection=[];
    validationCollection.push(Validators.required);
    validationCollection.push(Validators.pattern("^[A-Z]{1,1}[0-9]{4,4}$"));
    this.formGroup.addControl('SupplierCodeControl',new FormControl('',Validators.compose(validationCollection)));
  }

  SupplierName:string="";
  SupplierCode:string="";
  SupplierAmount:number=0;
}