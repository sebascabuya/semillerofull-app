import { RouterModule, Routes } from '@angular/router';
import { DepartamentosComponent } from './components/departamentos/departamentos.component';
import { FormularioActualizacionDepartamentosComponent } from './components/forms/formulario-actualizacion-departamentos/formulario-actualizacion-departamentos.component';
import { FormularioIngresoDepartamentosComponent } from './components/forms/formulario-ingreso-departamentos/formulario-ingreso-departamentos.component';
const ROUTES: Routes = [
    { path: '', redirectTo: 'inicio', pathMatch: 'full' },
    { path: 'departamentos', component: DepartamentosComponent},
    { path: 'departamentos/formulario-ingreso-departamentos', component: FormularioIngresoDepartamentosComponent},
    { path: 'departamentos/formulario-actualizacion-departamentos', component: FormularioActualizacionDepartamentosComponent}
]
export const APP_ROUTING = RouterModule.forRoot(ROUTES);