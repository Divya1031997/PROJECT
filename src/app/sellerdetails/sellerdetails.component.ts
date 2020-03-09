import { Component, OnInit, Input } from '@angular/core';
import { Seller } from '../seller';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-sellerdetails',
  templateUrl: './sellerdetails.component.html',
  styleUrls: ['./sellerdetails.component.css']
})
export class SellerdetailsComponent implements OnInit {


@Input()

seller:Seller;

  constructor(private pService:ProductService) { }

  ngOnInit(): void {
  }

}
