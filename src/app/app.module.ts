import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DepartamentosComponent } from './components/departamentos/departamentos.component';
import { APP_ROUTING } from './routes';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TablaDepartamentosComponent } from './components/tables/tabla-departamentos/tabla-departamentos.component';
import { FormularioIngresoDepartamentosComponent } from './components/forms/formulario-ingreso-departamentos/formulario-ingreso-departamentos.component';
import { FormularioActualizacionDepartamentosComponent } from './components/forms/formulario-actualizacion-departamentos/formulario-actualizacion-departamentos.component';
import { ClientesComponent } from './components/clientes/clientes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DepartamentosComponent,
    TablaDepartamentosComponent,
    FormularioIngresoDepartamentosComponent,
    FormularioActualizacionDepartamentosComponent,
    ClientesComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
