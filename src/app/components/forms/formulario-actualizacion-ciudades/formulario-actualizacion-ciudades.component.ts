import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Ciudades } from 'src/app/models/ciudades';
import { Departamentos } from 'src/app/models/departamentos';
import { CiudadesService } from 'src/app/services/ciudades.service';
import { DepartamentosService } from 'src/app/services/departamentos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario-actualizacion-ciudades',
  templateUrl: './formulario-actualizacion-ciudades.component.html',
  styleUrls: ['./formulario-actualizacion-ciudades.component.css']
})
export class FormularioActualizacionCiudadesComponent implements OnInit {

  ciudades: Ciudades = new Ciudades();
  departamentos: Departamentos = new Departamentos();
  formulario: FormGroup;
  ciudadElegida: Ciudades[];
  nombresDepartamentos: Departamentos[];
  private idCiudadElegida: number = JSON.parse(sessionStorage.getItem("Ciudad Id"));

  constructor(
    private ciudadesService: CiudadesService,
    private departamentosService: DepartamentosService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.armarFormulario();
    this.getListadoNombresDepartamentos();
    this.consultarCiudadById();
  }


  volverPaginaPrincipal(){
    this.router.navigate(['/ciudades'], {relativeTo: this.route})
  }

  private armarFormulario(){
    this.formulario = new FormGroup({
      numCodigoCiudad: new FormControl(this.ciudades.numCodigoCiudad),
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

  consultarCiudadById(){
    this.formulario.get("numCodigoCiudad").disable();
    this.ciudadesService.getConsultarCiudadPorId(this.idCiudadElegida).subscribe(
      (ciudadRta) => {
        (this.ciudadElegida = ciudadRta)
        this.formulario.patchValue({
          numCodigoCiudad: this.ciudadElegida['numCodigoCiudad'],  
          strCodigoDaneCiudad: this.ciudadElegida['strCodigoDaneCiudad'],
          strNombreCiudad: this.ciudadElegida['strNombreCiudad'],
          departamentosEntity: this.ciudadElegida['departamentosEntity']['numCodigoDepartamento']
        }),
        console.log(this.ciudadElegida['departamentosEntity']['numCodigoDepartamento'])
      }
    )
  }

  actualizarCiudades(){
    this.ciudades.strCodigoDaneCiudad = this.formulario.value.strCodigoDaneCiudad;
    this.ciudades.strNombreCiudad = this.formulario.value.strNombreCiudad;
    this.departamentos.numCodigoDepartamento = this.formulario.value.departamentosEntity;
    this.ciudades.departamentosEntity = this.departamentos;
    this.ciudadesService.putCiudades(this.idCiudadElegida, this.ciudades).subscribe(
      (ciudadesRta) => {
        (this.ngOnInit()),
        (Swal.fire('¡Proceso Exitoso!', 'Ciudad Actualizada', 'success')),
        (this.volverPaginaPrincipal());
        (sessionStorage.removeItem("Ciudad Id"))
      }
    )
  }
}
