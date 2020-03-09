import { Component, OnInit } from '@angular/core';
import { Cart, ViewCart } from '../cart';
import { ProductService } from '../product.service';
import { Transcation } from '../transcation';

@Component({
  selector: 'app-displaycart',
  templateUrl: './displaycart.component.html',
  styleUrls: ['./displaycart.component.css']
})
export class DisplaycartComponent implements OnInit {
  // disCart:Cart=new Cart();
    disCart:Cart[];
  viewcart:ViewCart=new ViewCart();
  transcation:Transcation=new Transcation();
  cost:number;
    success:string;
  //cart: any;
  i:any;
  constructor(private displaycart:ProductService) { }
  ngOnInit(): void {
    this.reloadcartItems();
    console.log(this.disCart);
    }
  reloadcartItems(){
    this.displaycart.displayCartItems().subscribe( disCart => 
      {console.log("markk"+JSON.stringify(disCart)); this.disCart=disCart;});
  }

  decrement(cartview:ViewCart){
    this.cost=cartview.price;
    console.log(cartview.price);
    if(cartview.quantity!=1){
    cartview.quantity-=1;
       cartview.totalprice= cartview.quantity * this.cost;
    console.log(cartview.quantity,cartview.cartItemId);
        this.displaycart.updateCartItems(cartview).subscribe(newview => this.viewcart=newview);
    }
   }
  increment(cartview:ViewCart){
    this.cost=cartview.price;
    
       cartview.quantity+=1
       if(cartview.quantity!=1){
    cartview.totalprice= cartview.quantity * this.cost;
    console.log(cartview);
    console.log("Quantity"+cartview.quantity+"\nCartID:"+cartview.cartItemId);
    this.displaycart.updateCartItems(cartview).subscribe(newview => this.viewcart=newview);
 }
  }

  DeleteItem(i){

    console.log("method invoked");
    console.log(i);
    this.displaycart.DeleteCartItem(i).subscribe(

      () =>{console.log("deleted Item"); this.reloadcartItems();}, (error) => console.log(error)

    );
  }

  DeleteAll(){
    this.displaycart.emptycart().subscribe(

    () =>console.log("Delete All Items"),
    (error) =>console.log(error)
          );
  }
 Checkout(transcation:Transcation){
  console.log();
  this.transcation.transactionType="credit card";
  this.transcation.remarks="good";
  this.transcation.dateTime="25-09-2019";
  console.log("entering the method"+transcation);
//  this.displaycart.CheckoutCart(transcation).subscribe(newview => this.viewcart=newview);
 this.displaycart.CheckoutCart(transcation).subscribe(
  () =>{console.log("success"); this.reloadcartItems()},
   (error) => console.log(error));
   window.alert("checkout done successfully!");
 }
}
