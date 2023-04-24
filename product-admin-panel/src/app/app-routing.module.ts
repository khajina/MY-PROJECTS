import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TrashComponent } from './trash/trash.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AddProductComponent } from './add-product/add-product.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'trash', component: TrashComponent },
  { path: 'product-detail', component: ProductDetailComponent },
  { path: 'add-product', component: AddProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
