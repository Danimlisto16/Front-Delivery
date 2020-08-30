import { Component, OnInit, HostBinding } from '@angular/core';
import swal from 'sweetalert2';
import { PRODUCTOService } from 'src/app/services/producto.service';
import { PRODUCTO } from 'src/app/models/producto';
import { PRODUCTOCATEGORIA } from 'src/app/models/producto-categoria';
import { PRODUCTOCATEGORIAService } from 'src/app/services/producto-categoria.service';
import { ComprasService } from 'src/app/services/compras.service';
@Component({
  selector: 'app-compras-list',
  templateUrl: './compras-list.component.html',
  styleUrls: ['./compras-list.component.css']
})
export class ComprasListComponent implements OnInit {
  productos: PRODUCTO[];
  producto_categoria: PRODUCTOCATEGORIA[];
  
  @HostBinding('class') classes = 'row';
  constructor(private productoService:PRODUCTOService,public comprasService:ComprasService, private prodcat:PRODUCTOCATEGORIAService) { }
  ngOnInit(): void {
    this.prodcat.list().subscribe(result => {      
      this.producto_categoria = result;
    });
     this.list();
     
  }

  agregarCarrito(a:PRODUCTO) :void {
    
    this.comprasService.addProducto(a);
  }

  list() : void {
    this.productoService.list().subscribe(result => {      
      this.productos = result;
    });
  }

}
