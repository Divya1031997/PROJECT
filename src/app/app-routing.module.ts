import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { DisplaycartComponent } from './displaycart/displaycart.component';
import { SearchproductComponent } from './searchproduct/searchproduct.component';
import { SellersignupComponent } from './sellersignup/sellersignup.component';
import { BuyersignupComponent } from './buyersignup/buyersignup.component';
import { LoginComponent } from './login/login.component';
import { AdditemComponent } from './additem/additem.component';


const routes: Routes = [
  {path : 'searchproduct',component:SearchproductComponent},
  {path : 'displaycart' , component:DisplaycartComponent},
  {path : 'sellersignup', component:SellersignupComponent},
  {path : 'buyersignup' , component:BuyersignupComponent},
  {path : 'login' , component:LoginComponent},
  {path : 'additem', component:AdditemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
