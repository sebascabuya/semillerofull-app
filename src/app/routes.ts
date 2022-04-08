import { RouterModule, Routes } from '@angular/router';
import { CiudadesComponent } from './components/ciudades/ciudades.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { DepartamentosComponent } from './components/departamentos/departamentos.component';
import { FormularioActualizacionCiudadesComponent } from './components/forms/formulario-actualizacion-ciudades/formulario-actualizacion-ciudades.component';
import { FormularioActualizacionDepartamentosComponent } from './components/forms/formulario-actualizacion-departamentos/formulario-actualizacion-departamentos.component';
import { FormularioActualizacionOficinasComponent } from './components/forms/formulario-actualizacion-oficinas/formulario-actualizacion-oficinas.component';
import { FormularioActualizacionReferenciasComponent } from './components/forms/formulario-actualizacion-referencias/formulario-actualizacion-referencias.component';
import { FormularioIngresoCiudadesComponent } from './components/forms/formulario-ingreso-ciudades/formulario-ingreso-ciudades.component';
import { FormularioIngresoDepartamentosComponent } from './components/forms/formulario-ingreso-departamentos/formulario-ingreso-departamentos.component';
import { FormularioIngresoOficinasComponent } from './components/forms/formulario-ingreso-oficinas/formulario-ingreso-oficinas.component';
import { FormularioIngresoReferenciasComponent } from './components/forms/formulario-ingreso-referencias/formulario-ingreso-referencias.component';
import { OficinasComponent } from './components/oficinas/oficinas.component';
import { ReferenciasComponent } from './components/referencias/referencias.component';
const ROUTES: Routes = [
    { path: '', redirectTo: 'inicio', pathMatch: 'full' },
    { path: 'referencias', component: ReferenciasComponent},
    { path: 'referencias/formulario-ingreso-referencias', component: FormularioIngresoReferenciasComponent},
    { path: 'referencias/formulario-actualizacion-referencias', component: FormularioActualizacionReferenciasComponent},
    { path: 'departamentos', component: DepartamentosComponent},
    { path: 'departamentos/formulario-ingreso-departamentos', component: FormularioIngresoDepartamentosComponent},
    { path: 'departamentos/formulario-actualizacion-departamentos', component: FormularioActualizacionDepartamentosComponent},
    { path: 'ciudades', component: CiudadesComponent},
    { path: 'ciudades/formulario-ingreso-ciudades', component: FormularioIngresoCiudadesComponent},
    { path: 'ciudades/formulario-actualizacion-ciudades', component: FormularioActualizacionCiudadesComponent},
    { path: 'oficinas', component: OficinasComponent},
    { path: 'oficinas/formulario-ingreso-oficinas', component: FormularioIngresoOficinasComponent},
    { path: 'oficinas/formulario-actualizacion-oficinas', component: FormularioActualizacionOficinasComponent},
    { path: 'clientes', component: ClientesComponent}
    
]
export const APP_ROUTING = RouterModule.forRoot(ROUTES);