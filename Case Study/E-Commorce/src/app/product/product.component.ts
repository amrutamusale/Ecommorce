import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  templateUrl: './Product.component.html'
})
export class ProductComponent {

  constructor(public httpc:HttpClient) {
   

  }
  title = 'E-COMMORCE';
  myname = 'Amruta Musale'
  ProductModel: Product = new Product();
  ProductModels: Array<Product> = new Array<Product>();
  AddProduct() {
    console.log(this.ProductModel);
    //this.ProductModels.push(this.ProductModel);

    var Productdto={
      ProductId:this.ProductModel.ProductId,
      ProductName:this.ProductModel.ProductName,
      ProductCategory:this.ProductModel.ProductCategory,
      ProductPrice:Number(this.ProductModel.ProductPrice)
    }
    this.httpc.post("https://localhost:44381/api/Product",Productdto).subscribe(res=>this.PostSuccess(res),res=>this.PostError(res));
    this.ProductModel = new Product();
  }
  PostSuccess(res:any){
    console.log(res);
    
  }
  PostError(res:any){
    console.log(res);
  }
  EditProduct(input: Product) {
    this.ProductModel = input;
  }
  DeleteProduct(input: Product) {
    var index=this.ProductModels.indexOf(input);
    this.ProductModels.splice(index,1);
  }
  getData(){
    console.log("Hi");
    this.httpc.get("https://localhost:44381/api/Product").subscribe(res=>this.GetSuccess(res),res=>this.GetError(res));
  }
  GetSuccess(input:any){
    this.ProductModels=input;
  }
  GetError(input:any){
    console.log(input);
  }
}