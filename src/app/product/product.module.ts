import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductlistComponent } from './product-list/product-list.component';
import { ProductComponent } from './product.component';
import { ProductService } from './shared/product.service';

const routes: Routes = [
  {
    path:'products',component:ProductComponent,
    children:[
      {path:'',component:ProductlistComponent},
      {path:':productId',component:ProductDetailComponent}
    ]
  },
];

@NgModule({
  declarations: [
    ProductComponent,
    ProductlistComponent,
    ProductDetailComponent
  ],
  imports: [RouterModule.forChild(routes),
            CommonModule
  ],
  providers: [
    ProductService
  ],
  bootstrap: []
})
export class ProductModule { }
