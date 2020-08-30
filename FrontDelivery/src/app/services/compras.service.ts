import { Injectable } from '@angular/core';
import { PRODUCTO } from '../models/producto';
import { Carrito } from '../models/carrito';
import { CAB_FACTURA } from '../models/cab-factura';

@Injectable({
  providedIn: 'root'
})
export class ComprasService {
  carrito:Carrito[];
  cabecera:CAB_FACTURA[];
  item:Carrito=new Carrito();
  constructor() { }

  getProductos() {
    if(localStorage.getItem('Productos') === null) {
      this.carrito = [];
    } else {
      this.carrito = JSON.parse(localStorage.getItem('Productos'));
    }
    return this.carrito;
  }

  vaciarCarrito(){
    localStorage.clear();
    this.getProductos();
  }

  addProducto(producto: PRODUCTO) {
    let unidad=false;
    this.item.id_producto=producto.id_producto;
    this.item.nombre=producto.nombre;
    this.item.imageUrl=producto.imageUrl;
    this.item.cantidad=1;
    this.item.subtotal=producto.precio;
    let productos;
    if(localStorage.getItem('Productos') === null) {
      productos = [];
      productos.push(this.item);
      localStorage.setItem('Productos', JSON.stringify(productos));
    } else {
      productos = JSON.parse(localStorage.getItem('Productos'));
      
      for(let p of productos){
        if (p.id_producto==producto.id_producto) {
          p.cantidad++;
          p.subtotal=p.cantidad*producto.precio;
          unidad=true;
          break;
        }
      }
      if (!unidad) {
        productos.push(this.item);   
      }
      localStorage.setItem('Productos', JSON.stringify(productos));
    }
  }

  
  itemsCarrito(producto: Carrito, numeroLista:number) {
    let precio=producto.subtotal/producto.cantidad;
    let productos;
    productos = JSON.parse(localStorage.getItem('Productos'));
      
      for(let p of productos){
        if (p.id_producto==producto.id_producto) {
          p.cantidad=numeroLista;
          p.subtotal=numeroLista*precio;
          break;
        }
      }
      localStorage.setItem('Productos', JSON.stringify(productos));
      this.getProductos();
    
  }
  completarCabecera(cab: CAB_FACTURA[]){
    localStorage.setItem('Cabecera', JSON.stringify(cab));
    
  }

  obtenerCabecera(){
    this.cabecera = JSON.parse(localStorage.getItem('Cabecera'));
    return this.cabecera;
  }
  cantidadProductos(){
    let numeroProductos=0;
    for(let p of this.carrito){
      numeroProductos+=p.cantidad;
    }
    return numeroProductos;
  }
  totalCarrito(){
    let total=0.0;
    for(let p of this.carrito){
      total+=p.subtotal;
    }
    return total;
  }
  deleteProducto(producto: Carrito) {
    for (let i = 0; i < this.carrito.length; i++) {
      if (producto == this.carrito[i]) {
        this.carrito.splice(i, 1);
        localStorage.setItem('Productos', JSON.stringify(this.carrito));
      }
    }
  }
}
