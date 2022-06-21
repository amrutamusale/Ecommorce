import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductComponent } from './product.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [ProductComponent]
})
export class ProductModule { }