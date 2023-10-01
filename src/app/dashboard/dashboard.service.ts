import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(
    private http: HttpClient
  ) { }

  getDashboardDetails() {
    return this.http.get('http://ec2-65-1-3-47.ap-south-1.compute.amazonaws.com:8082/dashboard').pipe(map((res: any)=>{
      return res;
    })
    );
  }
}
