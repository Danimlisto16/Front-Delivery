import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductoListComponent } from './components/producto-main/producto-list/producto-list.component';
import { ProductoFormComponent } from './components/producto-main/producto-form/producto-form.component';


const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: 'productos', component: ProductoListComponent},
  {path: 'productos/add', component:ProductoFormComponent},
  {path: 'productos/edit/:id', component: ProductoFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
