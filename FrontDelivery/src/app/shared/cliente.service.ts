import { Injectable } from '@angular/core';
import { cliente } from './cliente.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  formData : cliente;
  list: cliente[];
  constructor(private http: HttpClient) { }
  readonly rootURL = "https://localhost:44327/api";


  postCliente(formData : cliente){
    return this.http.post(this.rootURL+"/cliente",formData)
  }

  putCliente(formData : cliente){
    return this.http.put(this.rootURL+"/cliente/"+formData.id_cliente,formData)
  }


  getListaClientes(){
    this.http.get(this.rootURL+"/cliente")
    .toPromise().then(res => this.list = res as cliente[])
    .catch(error => {
      alert("Ocurrio un error al cargar la lista");
    });
  }


  onDelete(id : number){
    return this.http.delete(this.rootURL+"/cliente/"+id);
  }



  
}
