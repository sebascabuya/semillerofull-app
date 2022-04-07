import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Ciudades } from 'src/app/models/ciudades';
import { Departamentos } from 'src/app/models/departamentos';
import { CiudadesService } from 'src/app/services/ciudades.service';
import { DepartamentosService } from 'src/app/services/departamentos.service';

@Component({
  selector: 'app-formulario-ingreso-ciudades',
  templateUrl: './formulario-ingreso-ciudades.component.html',
  styleUrls: ['./formulario-ingreso-ciudades.component.css']
})
export class FormularioIngresoCiudadesComponent implements OnInit {

  ciudades: Ciudades = new Ciudades();
  nombresDepartamentos: Departamentos[];
  formulario: FormGroup;

  constructor(
    private ciudadesService: CiudadesService,
    private departamentosService: DepartamentosService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.armarFormulario();
    this.getListadoNombresDepartamentos();
  }

  volverPaginaPrincipal(){
    this.router.navigateByUrl('/ciudades', {skipLocationChange: true}).then(()=> this.router.navigate(["/ciudades"]));
  }

  private armarFormulario(){
    this.formulario = new FormGroup({
      strCodigoDaneCiudad: new FormControl(this.ciudades.strCodigoDaneCiudad, [Validators.required, Validators.minLength(4)]),
      strNombreCiudad: new FormControl(this.ciudades.strNombreCiudad, [Validators.required, Validators.minLength(5)]),
      departamentosEntity: new FormControl(this.ciudades.departamentosEntity, [Validators.required])
    })
  }

  getListadoNombresDepartamentos(){
    this.departamentosService.getDepartamentos().subscribe(
      (departamentosRta) => (this.nombresDepartamentos = departamentosRta)
    )
  }
}
