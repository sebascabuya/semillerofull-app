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
import { TablaClientesComponent } from './components/tables/tabla-clientes/tabla-clientes.component';
import { FormularioIngresoClientesComponent } from './components/forms/formulario-ingreso-clientes/formulario-ingreso-clientes.component';
import { FormularioActualizacionClientesComponent } from './components/forms/formulario-actualizacion-clientes/formulario-actualizacion-clientes.component';
import { TablaReferenciasComponent } from './components/tables/tabla-referencias/tabla-referencias.component';
import { ReferenciasComponent } from './components/referencias/referencias.component';
import { FormularioIngresoReferenciasComponent } from './components/forms/formulario-ingreso-referencias/formulario-ingreso-referencias.component';
import { FormularioActualizacionReferenciasComponent } from './components/forms/formulario-actualizacion-referencias/formulario-actualizacion-referencias.component';
import { CiudadesComponent } from './components/ciudades/ciudades.component';
import { TablaCiudadesComponent } from './components/tables/tabla-ciudades/tabla-ciudades.component';
import { FormularioIngresoCiudadesComponent } from './components/forms/formulario-ingreso-ciudades/formulario-ingreso-ciudades.component';
import { FormularioActualizacionCiudadesComponent } from './components/forms/formulario-actualizacion-ciudades/formulario-actualizacion-ciudades.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DepartamentosComponent,
    TablaDepartamentosComponent,
    FormularioIngresoDepartamentosComponent,
    FormularioActualizacionDepartamentosComponent,
    ClientesComponent,
    TablaClientesComponent,
    FormularioIngresoClientesComponent,
    FormularioActualizacionClientesComponent,
    TablaReferenciasComponent,
    ReferenciasComponent,
    FormularioIngresoReferenciasComponent,
    FormularioActualizacionReferenciasComponent,
    CiudadesComponent,
    TablaCiudadesComponent,
    FormularioIngresoCiudadesComponent,
    FormularioActualizacionCiudadesComponent
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
