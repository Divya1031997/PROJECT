import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { Cart, ViewCart } from './cart';
import { Transcation } from './transcation';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  [x: string]: any;

  private baseUrl = 'http://localhost:8087/search';

  private baseUrl2 ='http://localhost:8082/DeleteItem';
  private baseUrl3 ='http://localhost:8082/DeleteAllItem';
  private baseUrl4 ='http://localhost:8082/checkout/1';

  constructor(private http: HttpClient) { }

  addItem(product: Object): Observable<Object>{

    return this.http.post(`http://localhost:8087/Add/items`,product);
  }

  getItems(itemname: string) : Observable<any> {
    console.log(itemname);

    return this.http.get(`${this.baseUrl}/${itemname}`);
  }
  addToCart(cart:Cart):Observable<any> {
return this.http.post(`http://localhost:8082/Add/items/1`,cart);


  }





displayCartItems() : Observable<any>{

return this.http.get(`http://localhost:8082/getAll/items`);
}
createBuyer(buyer: Object): Observable<Object>{

  return this.http.post(`http://localhost:8082/Add/buyer`,buyer);
}
createSeller(seller: Object): Observable<Object>{

  return this.http.post(`http://localhost:8087/Add/seller`,seller);
}
// updateCartItems(cartview:ViewCart) : Observable<any>{

//   return this.http.put(`http://localhost:8082/updatecart`,cartview);
// }


updateCartItems(cartview:ViewCart) : Observable<any>{
  console.log(cartview);
  return this.http.put(`http://localhost:8082/updatecart`,cartview);
}
DeleteCartItem(cartItemId:number) : Observable<any> {

  return this.http.delete(`${this.baseUrl2}/${cartItemId}`);

}

emptycart(): Observable<void> {

  return this.http.delete<void>(`${this.baseUrl3}`);
}
CheckoutCart(transcation:Transcation): Observable<any> {
  return this.http.post(`${this.baseUrl4}`,transcation);
  
}
}


