import { Component } from '@angular/core';
import { ItemsService } from './items.service';
import { Items } from './Items';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  [x: string]: any;
  
  title = 'marts';
  items: Items[];
  message : any;
 
  constructor(private ItemsService:ItemsService)
  {
  console.log("invoked");
  }

  get()
  {
  
    console.log("invoked",this.itemName);
    this.ItemsService.searchByName(this.itemName).subscribe(items=>this.items=items);
  }
  addProductToCart()
  {
    this.ItemService.addProductToCart(this.itemId,this.price,this.products).subscribe(response=>
      {
        if(response['errorMessage']!=undefined)
      {
        this.message=response['errorMessage'];
      }
      else
      {
       this.message=response;
      }
      }
      );
  }

}

