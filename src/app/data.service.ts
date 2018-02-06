import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { tap } from "rxjs/operators";

@Injectable()
export class DataService {
  url = 'http://192.168.1.218:3000/list'
  isLogin = false

  constructor (private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get(this.url).pipe(tap(data => {
      console.log(data)
    }))
  }
}