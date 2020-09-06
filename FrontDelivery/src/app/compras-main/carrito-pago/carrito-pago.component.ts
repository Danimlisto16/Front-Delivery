import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Carrito } from 'src/app/models/carrito';
import { CAB_FACTURA } from 'src/app/models/cab-factura';
import { DETALLEFACTURA } from 'src/app/models/detalle-factura';
import { ComprasService } from 'src/app/services/compras.service';
import { DetalleFacturaService } from 'src/app/services/detalle-factura.service';
import { CabeceraFacturaService } from 'src/app/services/cabecera-factura.service';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { Cliente } from 'src/app/shared/cliente.model';
import { ClienteService } from 'src/app/shared/cliente.service';
import Swal from 'sweetalert2';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-carrito-pago',
  templateUrl: './carrito-pago.component.html',
  styleUrls: ['./carrito-pago.component.css']
})
export class CarritoPagoComponent implements OnInit {
  carrito:Carrito[];
  cantidad:number;
  total:number;
  faCheck = faCheck;
  clientes:Cliente[];
  cliente:Cliente;
  show:boolean = false;
  cab_factura:CAB_FACTURA=new CAB_FACTURA();
  det_factura:DETALLEFACTURA= new DETALLEFACTURA();
  
  constructor(public comprasService:ComprasService, public clienteService:ClienteService, public detalleFacturaService:DetalleFacturaService, public cabeceraFacturaService:CabeceraFacturaService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.listarCarrito();
    this.calculoProductos();
   // this.recuperarCabecera();
   // this.cabs= this.comprasService.obtenerCabecera();
  }


  listarCarrito():void{
    this.carrito=this.comprasService.getProductos();
  }

  calculoProductos(){
    this.cantidad= this.comprasService.cantidadProductos();
    this.total=this.comprasService.totalCarrito();
  }

  searchCliente($event) : void {
    //console.info($event.target.value);
    this.clienteService.search($event.target.value).subscribe(
      result => this.clientes = result
    )

    
  }

  selectClient(id:number){
    this.clienteService.retrieve(id).subscribe(
      result => this.cliente = result
    )
  }

  agregarCabecera(){
    //if (this.cont<1) {
      this.cab_factura.id_cliente=this.cliente.id_cliente;
      this.cab_factura.id_estado_envio=1;
      this.cab_factura.id_estado_pago=2;
      this.cab_factura.fecha=new Date();
      this.cab_factura.ruc_emisor="999999999";
      // this.cabeceraFacturaService.save(this.cab_factura).subscribe(result=>console.log(result));
      
    
      
   // }
  }

  agregarDetalles(){
    this.show = true;
    // let clave=this.cab.id_cfactura;
    // clave++;
    console.log(this.cab_factura);
    for(let detalle of this.carrito){
      //this.det_factura.id_cFactura=clave;
      this.det_factura.caB_FACTURA=this.cab_factura;
      this.det_factura.id_producto=detalle.id_producto;
      this.det_factura.cantidad=detalle.cantidad;
      this.det_factura.subtotal=detalle.subtotal;
      this.detalleFacturaService.save(this.det_factura).subscribe(result=>console.log(result));
      
    }
    this.show=false;
    if (!this.show) {
      Swal.fire({
        title: '!Compra Exitosa¡',
        text: 'Gracias por Preferirnos',
        imageUrl: 'https://image.flaticon.com/icons/svg/1656/1656507.svg',
        imageWidth: 350,
        imageHeight: 150,
        imageAlt: 'Custom image',
      });
      this.router.navigate(['/compras']);
      
    }

    
  }

  // recuperarCabecera(){
  //   this.cab = this.cabs[this.cabs.length - 1];
  // }

  finalizarCompra(){
   // let i=0;   
     this.agregarCabecera();
    //this.recuperarCabecera();
     this.agregarDetalles();  
     this.comprasService.vaciarCarrito();
   
        
  }

}
