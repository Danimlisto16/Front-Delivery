import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Carrito } from 'src/app/models/carrito';
import { ComprasService } from 'src/app/services/compras.service';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { CAB_FACTURA } from 'src/app/models/cab-factura';
import { CabeceraFacturaService } from 'src/app/services/cabecera-factura.service';
@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  carrito:Carrito[];
  faTimes=faTimes;
  cantidad:number;
  total:number;
  cabs:CAB_FACTURA[];
  //@Output() cabecera = new EventEmitter<CAB_FACTURA[]>();
  
  constructor(public comprasService:ComprasService, public cabeceraFacturaService:CabeceraFacturaService) { }

  ngOnInit(): void {
    this.listarCarrito();
    this.calculoProductos();
    //this.recuperarCabecera();
  }

  limpiarCarrito():void{
    this.comprasService.vaciarCarrito();
    this.calculoProductos();
    this.listarCarrito();
  }

  listarCarrito():void{
    this.carrito=this.comprasService.getProductos();
  }
  
  
  eliminarProducto(p:Carrito):void{
    this.comprasService.deleteProducto(p);
    this.calculoProductos();
    this.listarCarrito();
  }

  removeFromCart(p:Carrito){
    let item=p.cantidad;
    item--;
    if (item>0) {
      this.comprasService.itemsCarrito(p,item);
      this.calculoProductos();
      this.listarCarrito();
    }
  }

  addToCart(p:Carrito){
    let item=p.cantidad;
    item++;
    if (item<11) {
      this.comprasService.itemsCarrito(p,item);
      this.calculoProductos();
      this.listarCarrito();
    }
  }
  calculoProductos(){
    this.cantidad= this.comprasService.cantidadProductos();
    this.total=this.comprasService.totalCarrito();
  }

  // recuperarCabecera(){
  //   let i=0;
  //   // while (i>=1) {
  //     this.cabeceraFacturaService.get().subscribe(
  //       result => {
  //       this.comprasService.completarCabecera(result) ;
  //       // console.log(result);
  //       // this.cabecera.emit(result);
  //       } 
  //     )
      
  //     //console.log(this.cabecera);
  //     i++;
  //   // }
  //  // this.cab_factura = this.cabs[this.cabs.length - 1];
  // }

}
