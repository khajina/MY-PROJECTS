import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../service/product-service.service';
import { Router } from '@angular/router'
import Swal from 'sweetalert2';
import { Options } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  value: number = 0;
  options: Options = {
    floor: 0,
    ceil: 10000
  };
  rateValue: number = 0;
  rateoptions: Options = {
    floor: 0,
    ceil: 5
  }
  trashArray: any = [];
  isOpen = false;
  productList :any= [];
  constructor(private productService : ProductServiceService,
     private router: Router) {
    this.isOpen = false;
    let temps = JSON.parse(localStorage.getItem('Product') || '{}');
    this.productService.currentProducts = temps;
  }

  ngOnInit(): void {
    console.log(this.productService.currentProducts)
    this.productList = this.productService.currentProducts;
    
    //localStorage.setItem('Product',JSON.stringify(this.productService.currentProducts));
  }

  getProducts(newarray:any){
    this.productService.currentProducts = newarray;
  }

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  closeNav() {
    this.isOpen = !this.isOpen;
  }

  removeProduct(prodID: any) {
    Swal.fire({
      title: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.productService.currentProducts.filter((res: any) => {
          if (res.id === prodID) {
            this.trashArray.push(res);
            this.productService.trashProducts = this.trashArray;
          }
        })
        let newarray = []
        newarray =  this.productService.currentProducts.filter((dt:any)=> dt.id!= prodID)
        this.productService.currentProducts = newarray;
        this.productList = this.productService.currentProducts;
        this.getProducts(newarray);
        Swal.fire(
          'Deleted!',
          'Your Product moved to trash.',
          'success'
        )
      }
    })
    
  }

  productDetail(id:any){
      this.router.navigateByUrl('/product-detail')
      this.productService.productSelected = id;
  }

  checkBoxChange(event:any){
      if(event.target.value === 'Price'){
        this.productList = this.productService.currentProducts.filter((element:any)=>{
          return element.price ==event.target.value;
        });
      }
      else if(event.target.value === 'Rating'){
        this.productList = this.productService.currentProducts.filter((element:any)=>{
          return element.rating ==event.target.value;
        });
      }
  }

  stockChange(event:any){
    if(event.target.value){
      this.productList = this.productService.currentProducts.filter((element:any)=>{
        return element.status==event.target.value;
      });
    }
    else{
      this.productList = this.productService.currentProducts
    }
  }

  searchText(event:any){
    if(event.target.value){
      this.productList = this.productService.currentProducts.filter((element:any)=>{
        return element.title.toLowerCase()==event.target.value.toLowerCase();
      });
    }
    else{
      this.productList = this.productService.currentProducts
    }
  }
   
  clearAll(){
    this.productList = this.productService.currentProducts;
    this.value = 0;
    this.rateValue = 0;
  }

  onValueChange(value:any){
    if(value){
      this.productList = this.productService.currentProducts.filter((element:any)=>{
        return element.price <= value;
      });
    }
  }

  onRateValueChange(val:any){
    if(val){
      this.productList = this.productService.currentProducts.filter((element:any)=>{
        return element.rating === val;
      });
    }
  }



}
