import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators, FormBuilder } from '@angular/forms';
import { ProductServiceService } from '../service/product-service.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  productForm :FormGroup;
  addFlag :boolean = false;
  constructor(private _formBuilder:FormBuilder,
    private productService : ProductServiceService,
    private router:Router) { 
      this.addFlag = this.productService.addFlag;
      if(this.addFlag){
        this.productForm = this._formBuilder.group({
          id: [this.getId(),Validators.required],
          title :['',[Validators.required,Validators.maxLength(50)]],
          description :['',[Validators.required,Validators.minLength(150)]],
          price :['',Validators.required],
          status :['In-stock',Validators.required],
          rating :['',Validators.required],
          url :['',[Validators.required, Validators.pattern('(http(s?):)([/|.|\w|\s|-])*\.*')]],
          like :[''],
        })
      }
      else{
        let tempArray = [];
        tempArray = this.productService.currentProducts.filter((res:any)=> res.id == this.productService.editProductID)
        this.productForm = this._formBuilder.group({
          id: [tempArray[0].id,Validators.required],
          title :[tempArray[0].title,Validators.required],
          description :[tempArray[0].description,Validators.required],
          price :[tempArray[0].price,Validators.required],
          status :[tempArray[0].status,Validators.required],
          rating :[tempArray[0].rating,Validators.required],
          url :[tempArray[0].url,[Validators.required, Validators.pattern('(http(s?):)([/|.|\w|\s|-])*\.*')]],
          like :[tempArray[0].like],
        })
      }
    

  }

  get f() { return this.productForm.controls; }


  getId(){
    if(this.productService.currentProducts.length>0){
      return '20'+this.productService.currentProducts.length;
    }
    else{
      return '10'+this.productService.currentProducts.length;
    }
  }

  ngOnInit(): void {
  }

  submit(){
      if(this.addFlag){
        this.productService.currentProducts.push(this.productForm?.value);
        localStorage.setItem('Product',JSON.stringify(this.productService.currentProducts));
        Swal.fire({icon: 'success',title: 'Product Added',showConfirmButton: true,})
        this.router.navigateByUrl('/')
      }
      else{
        this.productService.currentProducts.filter((res:any)=>{
          if(res.id === this.productService.editProductID){
            res.id = this.productService.editProductID;
            res.title = this.productForm.get('ttile')?.value;
            res.description = this.productForm.get('description')?.value;
            res.price = this.productForm.get('price')?.value;
            res.rating = this.productForm.get('rating')?.value;
            res.like = this.productForm.get('like')?.value;
            res.status = this.productForm.get('status')?.value;
          }
        });
        localStorage.setItem('Product',JSON.stringify(this.productService.currentProducts));
        Swal.fire({icon: 'success',title: 'Product Updated',showConfirmButton: true,})
        this.router.navigateByUrl('/')
        console.log(this.productService.currentProducts)
      }
}

}
