import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../service/product-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
  isOpen = false;
  currentProducts:any = [];
  trashArray :any = [];
  constructor(private productService : ProductServiceService) {
    let temp :any = [];
    this.isOpen = false;
    this.trashArray = this.productService.trashProducts
    console.log(this.trashArray)
  }

  ngOnInit(): void {
    this.currentProducts =  this.productService.currentProducts;
  }

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  closeNav() {
    this.isOpen = false;
  }

  restoreProduct(id:any){
    Swal.fire({
      title: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, restored it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.trashArray.filter((dt:any)=>{
          if(dt.id === id){
            this.currentProducts.push(dt);
           this.productService.currentProducts = this.currentProducts ;
          }
        })
    
        let newarray = [];
        newarray = this.trashArray.filter((dt:any)=> dt.id!= id)
        if(newarray.length>0){
          this.productService.trashProducts = newarray;
          this.trashArray = this.productService.trashProducts;
        }
        else{
         this.productService.trashProducts = [];
         this.trashArray = [];
        }
        
        sessionStorage.setItem('Product',JSON.stringify(this.productService.currentProducts));
    
        // let temparray = [];
        // temparray =   this.productService.currentProducts.filter((dt:any)=> dt.id!= id)
        // this.productService.currentProducts = newarray;
    
        Swal.fire(
          'Deleted!',
          'Your product restored.',
          'success'
        )
      }
    })

    
    

  }

  removeProduct(id:any){
    let temparray = [];
    temparray = this.trashArray.filter((dt:any)=> dt.id!= id)
    this.productService.trashProducts = temparray;
    this.trashArray = temparray;

    let newarray = [];
    newarray =   this.productService.currentProducts.filter((dt:any)=> dt.id!= id)
    this.productService.currentProducts = newarray;
  }



}
