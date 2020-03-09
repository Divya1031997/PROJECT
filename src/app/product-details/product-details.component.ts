import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../items';
import { from } from 'rxjs';
import { ProductService } from '../product.service';
import { Cart } from '../cart';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
 
  @Input() 
  item :Item;
  abc:any;
  cart:Cart = new Cart();
  constructor(private PService : ProductService ) { }
  
  ngOnInit(): void {
  }

  onSave(itemId : number){
    
 this.cart.itemId=this.item.itemid;
 this.cart.price=this.item.itemCost;
 this.cart.quantity=this.item.quantity;
    this.PService.addToCart(this.cart).subscribe(abc=>{this.abc=abc;},
      error => console.log('erorr'+error));
    
  }

  

}
