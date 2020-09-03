import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PRODUCTO } from '../models/producto';
import {Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
import { isFunction } from 'util';
@Injectable({
  providedIn: 'root'
})
export class PRODUCTOService {

  url : string = "http://mtgr01-001-site1.gtempurl.com/api/producto";

  httpOptions={
    headers:new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'      
    })
  };
  constructor(private http:HttpClient) { }

  list(): Observable<PRODUCTO[]> {
    return this.http.get<PRODUCTO[]>(this.url, this.httpOptions)
      .pipe(
        retry(1)
      );
  }
  
  save(a:PRODUCTO) : Observable<any> {
    let PRODUCTOBody = JSON.stringify(a);    
    if(a.id_producto === undefined){      
      return this.http.post<any>(this.url, PRODUCTOBody, this.httpOptions);
    }
    return this.http.put<any>(this.url, PRODUCTOBody, this.httpOptions);
  }

  retrieve(id:number): Observable<PRODUCTO> {
    return this.http.get<PRODUCTO>(this.url + "/" + id, this.httpOptions)
      .pipe(
        retry(1)
      );
  } 

  delete(a: PRODUCTO) : Observable<any> {
    return this.http.delete<any>(this.url + '/' + a.id_producto, 
      this.httpOptions);
  }

  
}
