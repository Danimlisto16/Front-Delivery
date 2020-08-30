import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/shared/cliente.service';
import { Cliente } from 'src/app/shared/cliente.model';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';
import { faEye, faPlus, faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {

  faEye = faEye;
  faPlus = faPlus;
  faPencilAlt = faPencilAlt;
  faTrash = faTrash;

  
  clientes : Cliente[];

  constructor(private clienteService:ClienteService) { }

  ngOnInit(): void {
    this.list();
  }

  list() : void {
    this.clienteService.list().subscribe(result => this.clientes = result);
  }

  delete(a:Cliente) :void {
    Swal.fire({
      title: '¿Está seguro de continuar?',
      text: "El registro de Documento:" + a.documento +"Nombres:"+ a.nombres + " será eliminado.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        this.clienteService.delete(a).subscribe(
          result => {
            console.log(result);
            this.list();
          }
        )
      }
    })
  }

}
