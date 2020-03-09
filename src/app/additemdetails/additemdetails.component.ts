import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-additemdetails',
  templateUrl: './additemdetails.component.html',
  styleUrls: ['./additemdetails.component.css']
})
export class AdditemdetailsComponent implements OnInit {


   @Input()

   product:Product;

  constructor(private pSservice:ProductService) { }

  ngOnInit(): void {
  }

}
