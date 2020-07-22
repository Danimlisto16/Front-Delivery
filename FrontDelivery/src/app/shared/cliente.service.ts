import { Injectable } from '@angular/core';
import { cliente } from './cliente.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  formData : cliente;
  constructor(private http: HttpClient) { }
  readonly rootURL = "https://localhost:44327/api";


  postCliente(formData : cliente){
    return this.http.post(this.rootURL+"/cliente",formData)
  }
}
