import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ReporteVentas } from '../models/reporte-ventas';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReporteAlmacenadoService {

  url : string = "http://mtgr01-001-site1.gtempurl.com/api/reporteventas";

  httpOptions={
    headers:new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'      
    })
  };
  constructor(private http:HttpClient) { }
  list(): Observable<ReporteVentas[]> {
    return this.http.get<ReporteVentas[]>(this.url, this.httpOptions)
      .pipe(
        retry(1)
      );
  }

  async agregarLabels(listado){
    let etiquetas=[]
    listado.forEach(item=>{
      
      etiquetas.push(item.producto);
      
   })
   return etiquetas;
  }

  async agregarDatos(listado){
    let datos=[]
    listado.forEach(item=>{
      
      datos.push(item.cantidad);
      
   })
   return datos;
  }
}
