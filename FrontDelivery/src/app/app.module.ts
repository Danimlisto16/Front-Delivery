import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PRODUCTOService } from './services/producto.service';
import { ServiceInterceptor } from './services/service.interceptor';

import { ProductoFormComponent } from './components/producto-main/producto-form/producto-form.component';

import { ProductoListComponent } from './components/producto-main/producto-list/producto-list.component';
import { CategoriaPipe } from './shared/pipes/categoria.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductoFormComponent,
    ProductoListComponent,
    CategoriaPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  providers: [
    PRODUCTOService, {
      provide: HTTP_INTERCEPTORS,
      useClass: ServiceInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
