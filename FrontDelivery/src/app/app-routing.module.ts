import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteMainComponent } from './cliente-main/cliente-main.component';
import { ClienteFormComponent } from './cliente-main/cliente-form/cliente-form.component';
import { ClienteListComponent } from './cliente-main/cliente-list/cliente-list.component';
import { ProductoListComponent } from './components/producto-main/producto-list/producto-list.component';
import { ProductoFormComponent } from './components/producto-main/producto-form/producto-form.component';


const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  { path: 'cliente', component: ClienteMainComponent },
  { path: 'cliente/Form', component: ClienteFormComponent },
  { path: 'cliente/List', component: ClienteListComponent },
  {path: 'productos', component: ProductoListComponent},
  {path: 'productos/add', component:ProductoFormComponent},
  {path: 'productos/edit/:id', component: ProductoFormComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
