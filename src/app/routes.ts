import { RouterModule, Routes } from '@angular/router';
import { DepartamentosComponent } from './components/departamentos/departamentos.component';
const ROUTES: Routes = [
    { path: '', redirectTo: '/inicio', pathMatch: 'full' },
    { path: 'departamentos', component: DepartamentosComponent}
];

export const APP_ROUTING = RouterModule.forRoot(ROUTES);