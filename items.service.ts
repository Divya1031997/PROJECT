import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

private baseUrl='http://localhost:8087/search';
constructor(private http: HttpClient) { }

searchByName(searchkey:String):Observable<any>
{   
  
    console.log("in service method");
    return this.http.get(`${this.baseUrl}/${searchkey}`);
}
}