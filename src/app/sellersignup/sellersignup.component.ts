import { Component, OnInit } from '@angular/core';
import { Seller } from '../seller';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-sellersignup',
  templateUrl: './sellersignup.component.html',
  styleUrls: ['./sellersignup.component.css']
})
export class SellersignupComponent implements OnInit {

  seller: Seller=new Seller();
  submitted=false;

  constructor(private pService:ProductService) { }

  ngOnInit(): void {
  }

  newSeller(): void{

     this.submitted=false;
     this.seller=new Seller();

  }
  
    save() {

      this.pService.createSeller(this.seller)
      .subscribe(data =>console.log(data),error => console.log(error));
      this.seller=new Seller();
      
    }
    onSubmit(){

      this.submitted =true;
      this.save();

    }




}
