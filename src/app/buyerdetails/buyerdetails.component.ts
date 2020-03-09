import { Component, OnInit, Input } from '@angular/core';
import { Buyer } from '../buyer';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-buyerdetails',
  templateUrl: './buyerdetails.component.html',
  styleUrls: ['./buyerdetails.component.css']
})
export class BuyerdetailsComponent implements OnInit {


  @Input()
  
  buyer:Buyer;

  constructor( private pService:ProductService) { }


  ngOnInit(): void {
  }

}
