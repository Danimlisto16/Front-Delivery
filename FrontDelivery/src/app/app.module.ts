import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS}  from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteMainComponent } from './cliente-main/cliente-main.component';
import { ClienteFormComponent } from './cliente-main/cliente-form/cliente-form.component';
import { ClienteListComponent } from './cliente-main/cliente-list/cliente-list.component';
import {ClienteService} from './shared/cliente.service';  
import { PRODUCTOService } from './services/producto.service';
import { ServiceInterceptor } from './services/service.interceptor';
import { ProductoFormComponent } from './components/producto-main/producto-form/producto-form.component';
import { ProductoListComponent } from './components/producto-main/producto-list/producto-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ComprasListComponent } from './compras-main/compras-list/compras-list.component';
import { CarritoComponent } from './compras-main/carrito/carrito.component';
import { ClienteCardComponent } from './cliente-main/cliente-card/cliente-card.component';
import { CarritoPagoComponent } from './compras-main/carrito-pago/carrito-pago.component';

@NgModule({
  declarations: [
    AppComponent,
    ClienteMainComponent,
    ClienteFormComponent,
    ClienteListComponent,
    ProductoFormComponent,
    ProductoListComponent,
    ComprasListComponent,
    CarritoComponent,
    ClienteCardComponent,
    CarritoPagoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [
    ClienteService,
    PRODUCTOService, {
      provide: HTTP_INTERCEPTORS,
      useClass: ServiceInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
