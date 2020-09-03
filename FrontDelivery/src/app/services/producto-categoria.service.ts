import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
import { PRODUCTOCATEGORIA } from '../models/producto-categoria';
import { PRODUCTO } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class PRODUCTOCATEGORIAService {

  url : string = "http://mtgr01-001-site1.gtempurl.com/api/producto_categoria";

  httpOptions={
    headers:new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'      
    })
  };

  constructor(private http:HttpClient) { }

  list(): Observable<PRODUCTOCATEGORIA[]> {
    return this.http.get<PRODUCTOCATEGORIA[]>(this.url, this.httpOptions)
      .pipe(
        retry(1)
      );
  }

  retrieve(id:number): Observable<PRODUCTO[]> {
    return this.http.get<PRODUCTO[]>(this.url + "/" + id, this.httpOptions)
      .pipe(
        retry(1)
      );
  } 
}
