import { Component, OnInit} from '@angular/core';
import { faTrash, faListAlt, faPlus } from '@fortawesome/free-solid-svg-icons';
import swal from 'sweetalert2';
import { PRODUCTOService } from 'src/app/services/producto.service';
import { PRODUCTO } from 'src/app/models/producto';
import { PRODUCTOCATEGORIA } from 'src/app/models/producto-categoria';
import { PRODUCTOCATEGORIAService } from 'src/app/services/producto-categoria.service';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.css']
})

export class ProductoListComponent implements OnInit {

  title = 'paginacion';
  p:number = 1;

  faTrash = faTrash;
  faPlus= faPlus;
  faListAlt= faListAlt;
  productos: PRODUCTO[];
  producto_categoria: PRODUCTOCATEGORIA[];
  //@HostBinding('class') classes = 'row';

  constructor(private productoService:PRODUCTOService, private prodcat:PRODUCTOCATEGORIAService) { }

  ngOnInit(): void {
   // this.valor=new Array;
    //  this.productoval=new PRODUCTO;
    //  this.productoval.PRODUCTO_CATEGORIA=new PRODUCTOCATEGORIA;
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
