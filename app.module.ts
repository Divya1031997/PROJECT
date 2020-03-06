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
import { AdditemdetailsComponent } from './additemdetails/additemdetails.component';
import { AdditemlistComponent } from './additemlist/additemlist.component';
import { BuyerdetailsComponent } from './buyerdetails/buyerdetails.component';
import { BuyerlistComponent } from './buyerlist/buyerlist.component';
import { BuyersignupComponent } from './buyersignup/buyersignup.component';
import { SellerdetailsComponent } from './sellerdetails/sellerdetails.component';
import { SellerlistComponent } from './sellerlist/sellerlist.component';
import { SellersignupComponent } from './sellersignup/sellersignup.component';
import { LoginComponent } from './login/login.component'; 

@NgModule({
  declarations: [
    AppComponent,
    ProductDetailsComponent,
    DisplaycartComponent,
    SearchproductComponent,
    AdditemComponent,
    AdditemdetailsComponent,
    AdditemlistComponent,
    BuyerdetailsComponent,
    BuyerlistComponent,
    BuyersignupComponent,
    SellerdetailsComponent,
    SellerlistComponent,
    SellersignupComponent,
    LoginComponent
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
