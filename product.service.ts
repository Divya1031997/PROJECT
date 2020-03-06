import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { Cart } from './cart';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  [x: string]: any;

  private baseUrl = 'http://localhost:8087/search';



  constructor(private http: HttpClient) { }

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
}


