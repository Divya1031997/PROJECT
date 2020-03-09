import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule  } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { DisplaycartComponent } from './displaycart/displaycart.component';
import { SearchproductComponent } from './searchproduct/searchproduct.component';
import { AdditemComponent } from './additem/additem.component';
import { BuyersignupComponent } from './buyersignup/buyersignup.component';
import { BuyerdetailsComponent } from './buyerdetails/buyerdetails.component';
import { BuyerlistComponent } from './buyerlist/buyerlist.component';
import { SellersignupComponent } from './sellersignup/sellersignup.component';
import { SellerlistComponent } from './sellerlist/sellerlist.component';
import { SellerdetailsComponent } from './sellerdetails/sellerdetails.component';
import { AdditemlistComponent } from './additemlist/additemlist.component';
import { AdditemdetailsComponent } from './additemdetails/additemdetails.component'; 

@NgModule({
  declarations: [
    AppComponent,
    ProductDetailsComponent,
    DisplaycartComponent,
    SearchproductComponent,
    AdditemComponent,
    BuyersignupComponent,
    BuyerdetailsComponent,
    BuyerlistComponent,
    SellersignupComponent,
    SellerlistComponent,
    SellerdetailsComponent,
    AdditemlistComponent,
    AdditemdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
