import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/shared/cliente.model';
import { ClienteService } from 'src/app/shared/cliente.service';
import { ActivatedRoute } from '@angular/router';
import { faListAlt } from '@fortawesome/free-solid-svg-icons';
import { DETALLEFACTURA } from 'src/app/models/detalle-factura';
import { DetalleFacturaService } from 'src/app/services/detalle-factura.service';

@Component({
  selector: 'app-cliente-card',
  templateUrl: './cliente-card.component.html',
  styleUrls: ['./cliente-card.component.css']
})
export class ClienteCardComponent implements OnInit {

  faListAlt = faListAlt;

  cliente : Cliente;
  det_factura:DETALLEFACTURA[];
  constructor(private clienteservice:ClienteService,public detalleFacturaService:DetalleFacturaService , private activatedRoute : ActivatedRoute) { }

  
    ngOnInit(): void {
      this.activatedRoute.params.subscribe(
        params => {
          if(params['id']){
            this.clienteservice.retrieve(params['id']).subscribe(
              result=>{
                this.cliente = result;
                this.listFactura();
              }
            )
          }
        }
      );
    }

    listFactura() : void {
      this.detalleFacturaService.list(this.cliente.id_cliente).subscribe(
        result => this.det_factura = result
      );
    }

}
