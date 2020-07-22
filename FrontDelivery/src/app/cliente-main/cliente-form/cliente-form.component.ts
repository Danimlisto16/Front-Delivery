import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/shared/cliente.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {

  constructor(public service : ClienteService) { }

  ngOnInit(): void {
    this.resetForm();
  }

  onSubmit(form: NgForm){
    this.insertRecord(form);
  }

  resetForm(form? : NgForm){
    if(form != null)
      form.resetForm();
    this.service.formData = {
      id_cliente : null,
      documento :'',
      nombres :'',
      apellidos :'',
      celular :'',
      correo :'',
      direccion:'',
      fecha_nac :null,        
      usuario :'',
      password :''
    }
  }

  insertRecord(form: NgForm){

    this.service.postCliente(form.value).subscribe(res => {
      this.resetForm(form);
    })
  }
}
