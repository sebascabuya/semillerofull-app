import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Ciudades } from 'src/app/models/ciudades';
import { Departamentos } from 'src/app/models/departamentos';
import { CiudadesService } from 'src/app/services/ciudades.service';
import { DepartamentosService } from 'src/app/services/departamentos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario-ingreso-ciudades',
  templateUrl: './formulario-ingreso-ciudades.component.html',
  styleUrls: ['./formulario-ingreso-ciudades.component.css']
})
export class FormularioIngresoCiudadesComponent implements OnInit {

  ciudades: Ciudades = new Ciudades();
  departamentos: Departamentos = new Departamentos();
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
      strCodigoDaneCiudad: new FormControl(this.ciudades.strCodigoDaneCiudad, [Validators.required, Validators.minLength(3)]),
      strNombreCiudad: new FormControl(this.ciudades.strNombreCiudad, [Validators.required, Validators.minLength(5)]),
      departamentosEntity: new FormControl(this.ciudades.departamentosEntity, [Validators.required])
    })
  }

  getListadoNombresDepartamentos(){
    this.departamentosService.getDepartamentos().subscribe(
      (departamentosRta) => (this.nombresDepartamentos = departamentosRta)
    )
  }

  crearCiudad(){
    this.ciudades.strCodigoDaneCiudad = this.formulario.value.strCodigoDaneCiudad;
    this.ciudades.strNombreCiudad = this.formulario.value.strNombreCiudad;
     this.departamentos.numCodigoDepartamento = this.formulario.value.departamentosEntity;
    this.ciudades.departamentosEntity = this.departamentos;
    this.ciudadesService.postCiudades(this.ciudades).subscribe(
      (ciudadesRta) => {
        (this.armarFormulario()),
        (Swal.fire('¡Proceso Exitoso!', 'Ciudad Ingresada', 'success')),
        (this.volverPaginaPrincipal())
      }
    )
  }
}
