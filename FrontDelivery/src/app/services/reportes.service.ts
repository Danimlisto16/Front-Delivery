import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DETALLEFACTURA } from '../models/detalle-factura';
import {Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
import { PRODUCTO } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ReportesService {
  url : string = "http://mtgr01-001-site1.gtempurl.com/api/reportes";
  labels=[];
  ingresos=[];
  httpOptions={
    headers:new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'      
    })
  };
  constructor(private http:HttpClient) { }

  list(id:number): Observable<DETALLEFACTURA[]> {
    return this.http.get<DETALLEFACTURA[]>(this.url.concat("/") + id, this.httpOptions)
      .pipe(
        retry(1)
      );
  }
  
  search(id:number,criterio:string): Observable<DETALLEFACTURA[]> {
    return this.http.get<DETALLEFACTURA[]>(this.url.concat("/") + id + "".concat("?fecha=").concat(criterio) , this.httpOptions)
      .pipe(
        retry(1)
      );
  }

  getLabels(result){
    this.labels=[];
    result.forEach(x=>{
      this.labels.push(x.nombre);
    })
    return this.labels;
  }

  async getDataBar(result,etiquetas){
    let total=0;
    this.ingresos=[];
    for(let x of etiquetas){
      for(let item of result){
        if (x==item.producto.nombre) {
          total+=item.cantidad;

        }
        
      }
      this.ingresos.push(total);
      total=0;
    }
    

    return  this.ingresos;

  }

  async getData(result,etiquetas){
    let total=0.0;
    this.ingresos=[];
    for(let x of etiquetas){
      for(let item of result){
        if (x==item.producto.nombre) {
          total+=item.subtotal;

        }
        
      }
      this.ingresos.push(total);
      total=0.0;
    }
    

    return  this.ingresos;

  }

 
}
