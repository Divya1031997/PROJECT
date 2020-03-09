import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Buyer } from '../buyer';

@Component({
  selector: 'app-buyersignup',
  templateUrl: './buyersignup.component.html',
  styleUrls: ['./buyersignup.component.css']
})
export class BuyersignupComponent implements OnInit {

 

  buyer:Buyer=new Buyer();
  submitted=false;

  constructor( private pservice:ProductService) { }

  ngOnInit(): void {
  }

  newBuyer():void{

    this.submitted = false;
    this.buyer = new Buyer();

  }

  save(){

    this.pservice.createBuyer(this.buyer)
    .subscribe(data => console.log("submitted successfully"+data),error =>console.log(error));
    this.buyer=new Buyer();
    
  }

  onSubmit(){

this.submitted=true;
this.save();

  }
}
