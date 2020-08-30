import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteMainComponent } from './cliente-main/cliente-main.component';
import { ClienteFormComponent } from './cliente-main/cliente-form/cliente-form.component';
import { ClienteListComponent } from './cliente-main/cliente-list/cliente-list.component';
import { ProductoListComponent } from './components/producto-main/producto-list/producto-list.component';
import { ProductoFormComponent } from './components/producto-main/producto-form/producto-form.component';
import { ComprasListComponent } from './compras-main/compras-list/compras-list.component';
import { CarritoComponent } from './compras-main/carrito/carrito.component';
import { ClienteCardComponent } from './cliente-main/cliente-card/cliente-card.component';
import { CarritoPagoComponent } from './compras-main/carrito-pago/carrito-pago.component';
import { InicioComponent } from './inicio/inicio/inicio.component';


const routes: Routes = [
  {path: '', redirectTo: '/inicio', pathMatch: 'full'},
  { path: 'cliente', component: ClienteMainComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'clientes/form', component: ClienteFormComponent },
  { path: 'clientes/form/:id', component: ClienteFormComponent },
  { path: 'cliente/list', component: ClienteListComponent },
  { path: 'clientes/card/:id', component: ClienteCardComponent },
  {path: 'productos', component: ProductoListComponent},
  {path: 'compras', component: ComprasListComponent},
  {path: 'carrito', component: CarritoComponent},
  {path: 'check-out', component: CarritoPagoComponent},
  {path: 'productos/add', component:ProductoFormComponent},
  {path: 'productos/edit/:id', component: ProductoFormComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
