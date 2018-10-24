import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductList } from '../product';
import { ProductsComponent } from '../products/products.component';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {

  products:any=ProductList;
  cart:any;
  productList:Array<any>;
  @ViewChild(ProductsComponent) productComponent:ProductsComponent;
  @ViewChild(CartComponent) cartComponent:CartComponent;


  constructor() { }

  ngOnInit() {
    this.productList=ProductList;
    this.cart=this.productComponent.inCart;
  }

}
