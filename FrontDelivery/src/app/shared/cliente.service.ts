import { Injectable } from '@angular/core';
import { Cliente } from './cliente.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  url : string = "http://dlisto-001-site1.ftempurl.com/api/cliente";
  httpOptions={
    headers:new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'      
    })
  };
  constructor(private http:HttpClient) { }

  save(a:Cliente) : Observable<any> {
    let ClienteBody = JSON.stringify(a);    
    if(a.id_cliente === undefined){      
      return this.http.post<any>(this.url, ClienteBody, this.httpOptions);
    }
    return this.http.put<any>(this.url, ClienteBody, this.httpOptions);
  }

  retrieve(id:number): Observable<Cliente> {
    return this.http.get<Cliente>(this.url + "/" + id, this.httpOptions)
      .pipe(
        retry(1)
      );
  } 

  delete(a: Cliente) : Observable<any> {
    return this.http.delete<any>(this.url + '/' + a.id_cliente, 
      this.httpOptions);
  }


  list(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.url, this.httpOptions)
      .pipe(
        retry(1)
      );
  }

   

  search(criterio:string): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.url.concat("?cedula=").concat(criterio), this.httpOptions)
      .pipe(
        retry(1)
      );
  }
}
