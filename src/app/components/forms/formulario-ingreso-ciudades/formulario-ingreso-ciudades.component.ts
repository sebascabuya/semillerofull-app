import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Ciudades } from 'src/app/models/ciudades';
import { CiudadesService } from 'src/app/services/ciudades.service';

@Component({
  selector: 'app-formulario-ingreso-ciudades',
  templateUrl: './formulario-ingreso-ciudades.component.html',
  styleUrls: ['./formulario-ingreso-ciudades.component.css']
})
export class FormularioIngresoCiudadesComponent implements OnInit {

  ciudades: Ciudades = new Ciudades();
  formulario: FormGroup;

  constructor(
    private ciudadesService: CiudadesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.armarFormulario();
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

}
