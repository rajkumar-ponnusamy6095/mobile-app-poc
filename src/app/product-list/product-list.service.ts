import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {
  apiUlr = 'http://ec2-65-1-3-47.ap-south-1.compute.amazonaws.com:8082/getProducts';

  constructor(
    private http: HttpClient
  ) { }

  getProductDetails(pageId: number, tableId: number) {
    return this.http.get(`${this.apiUlr}?page=${pageId}&table=${tableId}`).pipe(map((res: any)=>{
      return res;
    })
    );
  }
}
