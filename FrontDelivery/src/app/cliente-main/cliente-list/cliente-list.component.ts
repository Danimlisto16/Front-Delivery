import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/shared/cliente.service';
import { cliente } from 'src/app/shared/cliente.model';
import {Router} from '@angular/router';


@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {

  constructor(public  service: ClienteService) { }
  
  

  ngOnInit(): void {
    this.service.getListaClientes();
  }

  llenarForm(cli : cliente){
    this.service.formData = cli;
  }

}
