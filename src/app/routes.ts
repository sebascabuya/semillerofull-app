import { RouterModule, Routes } from '@angular/router';
import { CiudadesComponent } from './components/ciudades/ciudades.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { DepartamentosComponent } from './components/departamentos/departamentos.component';
import { FormularioActualizacionDepartamentosComponent } from './components/forms/formulario-actualizacion-departamentos/formulario-actualizacion-departamentos.component';
import { FormularioActualizacionReferenciasComponent } from './components/forms/formulario-actualizacion-referencias/formulario-actualizacion-referencias.component';
import { FormularioIngresoDepartamentosComponent } from './components/forms/formulario-ingreso-departamentos/formulario-ingreso-departamentos.component';
import { FormularioIngresoReferenciasComponent } from './components/forms/formulario-ingreso-referencias/formulario-ingreso-referencias.component';
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
    { path: 'clientes', component: ClientesComponent}
    
]
export const APP_ROUTING = RouterModule.forRoot(ROUTES);