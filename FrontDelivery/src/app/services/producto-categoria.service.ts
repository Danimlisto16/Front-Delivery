import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
import { PRODUCTOCATEGORIA } from '../models/producto-categoria';

@Injectable({
  providedIn: 'root'
})
export class PRODUCTOCATEGORIAService {

  url : string = "https://localhost:44327/api/producto_categoria";

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
}
