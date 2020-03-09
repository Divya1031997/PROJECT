import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Item } from '../items';

@Component({
  selector: 'app-searchproduct',
  templateUrl: './searchproduct.component.html',
  styleUrls: ['./searchproduct.component.css']
})
export class SearchproductComponent implements OnInit {
  title = 'product';
  searchStr:string;
  items: Item[];
  constructor(private pService:ProductService) { }

  ngOnInit(): void {
    this.searchStr = "";
  }

  search(){
    console.log("invoked search()");
   
    this.pService.getItems(this.searchStr)
.subscribe(items=>this.items = items);    
  }
  onSubmit(){
this.search();

}
}
