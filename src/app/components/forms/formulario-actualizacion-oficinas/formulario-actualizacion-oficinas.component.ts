import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Ciudades } from 'src/app/models/ciudades';
import { Oficinas } from 'src/app/models/oficinas';
import { CiudadesService } from 'src/app/services/ciudades.service';
import { OficinasService } from 'src/app/services/oficinas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario-actualizacion-oficinas',
  templateUrl: './formulario-actualizacion-oficinas.component.html',
  styleUrls: ['./formulario-actualizacion-oficinas.component.css']
})
export class FormularioActualizacionOficinasComponent implements OnInit {

  public oficinas: Oficinas = new Oficinas();
  public ciudades: Ciudades = new Ciudades();
  public nombresCiudades: Ciudades[];
  public formulario: FormGroup;

  constructor(
    private oficinasService: OficinasService,
    private ciudadesService: CiudadesService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.armarFormulario();
    this.getListadoNombresCiudades();
  }

  volverPaginaPrincipal(): void{
    this.router.navigate(['/oficinas'], {relativeTo: this.route})
  }

  armarFormulario(){
    this.formulario = new FormGroup({
      strCodigoOficina: new FormControl(this.oficinas.strCodigoOficina, [Validators.required, Validators.minLength(3)]),
      strNombreOficina: new FormControl(this.oficinas.strNombreOficina, [Validators.required, Validators.minLength(4)]),
      strDireccionOficina: new FormControl(this.oficinas.strDireccionOficina, [Validators.required, Validators.minLength(10)]),
      ciudadesEntity: new FormControl(this.oficinas.ciudadesEntity, [Validators.required])
    })
  }

  getListadoNombresCiudades(){
    this.ciudadesService.getListaCiudades().subscribe(
      (ciudadesRta) => {
        (this.nombresCiudades = ciudadesRta)
      }
    )
  }

  actualizarOficina(){
    this.oficinas.strCodigoOficina = this.formulario.value.strCodigoOficina;
    this.oficinas.strNombreOficina = this.formulario.value.strNombreOficina;
    this.oficinas.strDireccionOficina = this.formulario.value.strDireccionOficina;
    this.ciudades.numCodigoCiudad = this.formulario.value.ciudadesEntity;
    this.oficinas.ciudadesEntity = this.ciudades;
    this.oficinasService.postOficinas(this.oficinas).subscribe(
      (oficinasRta) => {
        (this.armarFormulario()),
        (Swal.fire('¡Proceso Exitoso!', 'Oficina Ingresada', 'success')),
        (this.volverPaginaPrincipal())
      }
    )
  }
}
