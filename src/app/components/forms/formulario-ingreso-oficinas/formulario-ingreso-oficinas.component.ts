import { Component, OnInit } from '@angular/core';
import { Oficinas } from 'src/app/models/oficinas';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Ciudades } from 'src/app/models/ciudades';
import { OficinasService } from 'src/app/services/oficinas.service';
import { CiudadesService } from 'src/app/services/ciudades.service';

@Component({
  selector: 'app-formulario-ingreso-oficinas',
  templateUrl: './formulario-ingreso-oficinas.component.html',
  styleUrls: ['./formulario-ingreso-oficinas.component.css']
})
export class FormularioIngresoOficinasComponent implements OnInit {

  public oficinas: Oficinas = new Oficinas();
  public nombresCiudades: Ciudades[];
  public formulario: FormGroup;

  constructor(
    private oficinasService: OficinasService,
    private ciudadesService: CiudadesService
  ) { }

  ngOnInit(): void {
    this.armarFormulario();
    this.getListadoNombresCiudades();
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

  rellenarCiudad(){

  }
}
