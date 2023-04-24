import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgxSliderModule } from '@angular-slider/ngx-slider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TrashComponent } from './trash/trash.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddProductComponent } from './add-product/add-product.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TrashComponent,
    ProductDetailComponent,
    SidenavComponent,
    AddProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    RouterModule,
    NgbModule,
    NgxSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
