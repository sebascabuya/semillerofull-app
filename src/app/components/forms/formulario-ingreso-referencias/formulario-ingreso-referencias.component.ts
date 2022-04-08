import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Referencias } from 'src/app/models/referencias';
import { ReferenciasService } from 'src/app/services/referencias.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario-ingreso-referencias',
  templateUrl: './formulario-ingreso-referencias.component.html',
  styleUrls: ['./formulario-ingreso-referencias.component.css']
})
export class FormularioIngresoReferenciasComponent implements OnInit {

  public referencias: Referencias = new Referencias();
  public formulario: FormGroup;

  constructor(
    private referenciasService: ReferenciasService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.armarFormulario();
  }

  crearReferencia(){
    this.referencias.strDominio = this.formulario.value.strDominio;
    this.referencias.strRangoValor = this.formulario.value.strRangoValor;
    this.referencias.strDescripcion = this.formulario.value.strDescripcion;
    this.referencias.strEstado = this.formulario.value.btnradio;
    this.referenciasService.postReferencias(this.referencias).subscribe(
      (response) => {
        (this.armarFormulario()),
        Swal.fire('¡Proceso Exitoso!', 'Referencia Ingresada', 'success'),
        (this.volverPaginaPrincipal())
      }
    );
  }

  volverPaginaPrincipal(): void{ 
    this.router.navigate(['/referencias'], {relativeTo: this.route})
  }

  private armarFormulario(){
    this.formulario = new FormGroup({
      strDominio: new FormControl(this.referencias.strDominio, [Validators.required, Validators.minLength(12)]),
      strRangoValor: new FormControl(this.referencias.strRangoValor, [Validators.required]),
      strDescripcion: new FormControl(this.referencias.strDescripcion, [Validators.required, Validators.minLength(6)]),
      btnradio: new FormControl(this.referencias.strEstado, [Validators.required])
    })
  }
}
