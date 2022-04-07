import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Referencias } from 'src/app/models/referencias';
import { ReferenciasService } from 'src/app/services/referencias.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario-actualizacion-referencias',
  templateUrl: './formulario-actualizacion-referencias.component.html',
  styleUrls: ['./formulario-actualizacion-referencias.component.css']
})
export class FormularioActualizacionReferenciasComponent implements OnInit {

  public referencias: Referencias = new Referencias();
  referenciaElegiga: Referencias[];
  public formulario: FormGroup;
  referenciaId = JSON.parse(sessionStorage.getItem("Referencia Id"));

  constructor(
    private referenciasService: ReferenciasService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.armarFormulario();
    this.getReferenciaById();
  }

  volverPaginaPrincipal(): void{ 
    this.router.navigateByUrl('/referencias', {skipLocationChange: true}).then(()=> this.router.navigate(["/referencias"]));
  }

  private armarFormulario(){
    this.formulario = new FormGroup({
      numIdReferencia: new FormControl(this.referencias.numIdReferencia),
      strDominio: new FormControl(this.referencias.strDominio, [Validators.required, Validators.minLength(12)]),
      strRangoValor: new FormControl(this.referencias.strRangoValor, [Validators.required]),
      strDescripcion: new FormControl(this.referencias.strDescripcion, [Validators.required, Validators.minLength(6)]),
      btnradio: new FormControl(this.referencias.strEstado, [Validators.required])
    })
  }

  getReferenciaById(){
    this.formulario.get("numIdReferencia").disable();
    this.referenciasService.getReferenciaById(this.referenciaId).subscribe(
      (referencia) => {
        (this.referenciaElegiga = referencia),
        this.formulario.patchValue({
          numIdReferencia: this.referenciaElegiga['numIdReferencia'],  
          strDominio: this.referenciaElegiga['strDominio'],
          strRangoValor: this.referenciaElegiga['strRangoValor'],
          strDescripcion: this.referenciaElegiga['strDescripcion'],
          btnradio: this.referenciaElegiga['strEstado']
        })
      }
    )
  }

  editarReferencias(){
    this.referencias.strDominio = this.formulario.value.strDominio;
    this.referencias.strRangoValor = this.formulario.value.strRangoValor;
    this.referencias.strDescripcion = this.formulario.value.strDescripcion;
    this.referencias.strEstado = this.formulario.value.btnradio;
    this.referenciasService.putReferencias(this.referenciaId, this.referencias).subscribe(
      (referenciasRta) => {
        (this.ngOnInit()),
        Swal.fire('¡Proceso Exitoso!', 'Referencia Actualizada', 'success'),
        this.volverPaginaPrincipal();
        sessionStorage.removeItem("Referencia Id")
      }
    )
  }
}
