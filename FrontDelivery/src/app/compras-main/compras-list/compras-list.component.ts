import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { PRODUCTOService } from 'src/app/services/producto.service';
import { PRODUCTO } from 'src/app/models/producto';
import { PRODUCTOCATEGORIA } from 'src/app/models/producto-categoria';
import { PRODUCTOCATEGORIAService } from 'src/app/services/producto-categoria.service';
@Component({
  selector: 'app-compras-list',
  templateUrl: './compras-list.component.html',
  styleUrls: ['./compras-list.component.css']
})
export class ComprasListComponent implements OnInit {
  productos: PRODUCTO[];
  producto_categoria: PRODUCTOCATEGORIA[];
  constructor(private productoService:PRODUCTOService, private prodcat:PRODUCTOCATEGORIAService) { }

  ngOnInit(): void {
    this.prodcat.list().subscribe(result => {      
      this.producto_categoria = result;
    });
     this.list();
  }

  delete(a:PRODUCTO) :void {
    swal.fire({
      title: '¿Está seguro de continuar?',
      text: "El producto " + a.nombre +  " será eliminado.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        this.productoService.delete(a).subscribe(
          result => {
            console.log(result);
            this.list();
          }  
        )
        
      }
    })
  }

  list() : void {
    this.productoService.list().subscribe(result => {      
      this.productos = result;
    });
  }

}
