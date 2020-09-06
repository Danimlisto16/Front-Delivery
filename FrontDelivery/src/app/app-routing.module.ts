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
import { ReporteFechaComponent } from './Reportes/reporte-fecha/reporte-fecha.component';
import { ReporteTotalComponent } from './Reportes/reporte-total/reporte-total.component';
import { AuthGuard } from './guards/auth.guard';
import { IngresoFormComponent } from './ingreso-form/ingreso-form.component';

const routes: Routes = [
  {path: '', redirectTo: '/inicio', pathMatch: 'full'},
  { path: 'cliente', component: ClienteMainComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'clientes/form', component: ClienteFormComponent },
  { path: 'clientes/form/:id', component: ClienteFormComponent },
  { path: 'cliente/list', component: ClienteListComponent },
  { path: 'clientes/card/:id', component: ClienteCardComponent },
  {path: 'productos', component: ProductoListComponent, canActivate : [AuthGuard], data:{permittedRoles:["administrador"]}},
  {path: 'compras', component: ComprasListComponent},
  {path: 'carrito', component: CarritoComponent},
  {path: 'check-out', component: CarritoPagoComponent},
  {path: 'reporte-fecha', component: ReporteFechaComponent, canActivate : [AuthGuard], data:{permittedRoles:["administrador"]}},
  {path: 'total-ventas', component: ReporteTotalComponent, canActivate : [AuthGuard], data:{permittedRoles:["administrador"]}},
  {path: 'productos/add', component:ProductoFormComponent},
  {path: 'productos/edit/:id', component: ProductoFormComponent},
  {path: 'ingresar', component: IngresoFormComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
