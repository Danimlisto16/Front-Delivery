import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/shared/cliente.service';
import { NgForm, FormGroup, FormBuilder } from '@angular/forms';
import { Cliente } from 'src/app/shared/cliente.model';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {

  title = "Nuevo Cliente"
  cliente : Cliente = new Cliente();
  form : FormGroup;

  constructor(private clienteservice : ClienteService,
    private formBuilder: FormBuilder, 
    private activatedRoute : ActivatedRoute, 
    private router: Router
    ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      documento: [''],
      nombres: [''],
      apellidos: [''],
      fecha_nac: [''],
      celular: [''],
      direccion: [''],
      correo: [''],
      usuario: [''],
      password: ['']
      
    });  

    this.activatedRoute.params.subscribe(
      params => {
        if(params['id']){
          this.clienteservice.retrieve(params['id']).subscribe(
              result =>
              { 
                this.cliente = result;
                this.title = "Actualizando el registro de " + this.cliente.documento;
              }
          )
        }
      }
    );


    
    
  }
  
  onSubmit() : void {
    if(this.form.invalid){
      console.error('Error en formulario');
      return;
    }

    console.log(this.cliente);

    this.clienteservice.save(this.cliente).subscribe(
      
        result => {
          console.log(result);   
          this.router.navigate(['/cliente/list']);
        }
      
      
    );
  }

  onReset() : void {   
    this.form.reset();    
  }
}
