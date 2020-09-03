import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
import { CAB_FACTURA } from '../models/cab-factura';

@Injectable({
  providedIn: 'root'
})
export class CabeceraFacturaService {

  url : string = "http://mtgr01-001-site1.gtempurl.com/api/cab_factura";

  httpOptions={
    headers:new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'      
    })
  };
  constructor(private http:HttpClient) { }

  get(): Observable<CAB_FACTURA[]> {
    return this.http.get<CAB_FACTURA[]>(this.url, this.httpOptions)
    .pipe(
      retry(1)
    );
  }
  
  save(a:CAB_FACTURA) : Observable<any> {
    let PRODUCTOBody = JSON.stringify(a);    
    if(a.id_cfactura === undefined){
            
      return this.http.post<any>(this.url, PRODUCTOBody, this.httpOptions);
    }
   // return this.http.put<any>(this.url, PRODUCTOBody, this.httpOptions);
  }
}
