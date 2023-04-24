import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../service/product-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  id: any;
  productDetail :any
  constructor(private productService : ProductServiceService,
    private router:Router) { }

  ngOnInit(): void {
    this.id = this.productService.productSelected ;
    this.getProductDetails();
  }

  getProductDetails(){
    this.productDetail = this.productService.currentProducts.filter((res:any)=> res.id === this.id)
    console.log(this.productDetail)
  }
  liked(){
    this.productDetail[0].like = 1;
    console.log(this.productDetail)
  }
  Disliked(){
    this.productDetail[0].like = 0;
  }

  redirectTo(type:any){
    if(type === 'add'){
      this.productService.addFlag = true;
      this.router.navigateByUrl('/add-product')
    }
    else{
      this.productService.editProductID = this.productDetail[0].id;
      this.productService.addFlag = false;
      this.router.navigateByUrl('/add-product')
    }
  }

}
