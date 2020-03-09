import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent implements OnInit {


product : Product=new Product();
submitted=false;

  constructor(private pService:ProductService) { }

  ngOnInit(): void {
  }

  newProduct(): void{

    this.submitted =false;
    this.product = new Product();

  }
 save(){
   
  this.pService.addItem(this.product)
  .subscribe(data =>console.log(data), error => console.log(error));
  this.product = new Product();

 }

 onSubmit(){
 
  this.submitted=true;
  this.save();


 }


}
