import { Component,ViewEncapsulation } from '@angular/core';
import { ProductService } from './product.service'
import { from } from 'rxjs';
import { Meta } from '@angular/platform-browser';
import { Item } from './items'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  
  //ite:Item = new Item();

  constructor(){

  
console.log("constructor invoked");
  }
  ngOnInit() {
   
  }

 
}
