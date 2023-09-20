import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class loginService {
  constructor(private http: HttpClient) {}




login(details: any) {
    return this.http.get(`http://localhost:3000/login`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

}