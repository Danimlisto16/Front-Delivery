import { Injectable } from '@angular/core';
import { retry } from 'rxjs/operators';
import { CAB_FACTURA } from '../models/cab-factura';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable } from 'rxjs';
import { DETALLEFACTURA } from '../models/detalle-factura';
@Injectable({
  providedIn: 'root'
})
export class DetalleFacturaService {
  url : string = "http://dlisto-001-site1.ftempurl.com/api/detfactura";

  httpOptions={
    headers:new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'      
    })
  };
  constructor(private http:HttpClient) { }

  save(a:DETALLEFACTURA) : Observable<any> {
    let PRODUCTOBody = JSON.stringify(a);    
    if(a.id_detalle === undefined){
            
      return this.http.post<any>(this.url, PRODUCTOBody, this.httpOptions);
    }
    // this.http.put<any>(this.url, PRODUCTOBody, this.httpOptions);
  }

  list(id:number): Observable<DETALLEFACTURA[]> {
    return this.http.get<DETALLEFACTURA[]>(this.url.concat("/") + id, this.httpOptions)
      .pipe(
        retry(1)
      );
  } 
}
