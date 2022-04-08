import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Departamentos } from 'src/app/models/departamentos';
import { DepartamentosService } from 'src/app/services/departamentos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario-ingreso-departamentos',
  templateUrl: './formulario-ingreso-departamentos.component.html',
  styleUrls: ['./formulario-ingreso-departamentos.component.css']
})
export class FormularioIngresoDepartamentosComponent implements OnInit {

  public departamento: Departamentos = new Departamentos();
  public formulario: FormGroup;

  constructor(
    private departamentosService: DepartamentosService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.armarFormulario();
  }

  private armarFormulario(){
    this.formulario = new FormGroup({
      strCodigoDaneDepartamento: new FormControl(this.departamento.strCodigoDaneDepartamento, [Validators.required, Validators.minLength(2)]),
      strNombreDepartamento: new FormControl(this.departamento.strNombreDepartamento, [Validators.required, Validators.minLength(5)])
    })
  }

  volverPaginaPrincipal(): void{ 
    this.router.navigate(['/departamentos'], {relativeTo: this.route})
  }


  crearDepartamento(): void{
    this.departamento.strCodigoDaneDepartamento = this.formulario.value.strCodigoDaneDepartamento;
    this.departamento.strNombreDepartamento = this.formulario.value.strNombreDepartamento;
    this.departamentosService.postDepartamentos(this.departamento).subscribe(
      (departamentoRta) => 
      {
        this.armarFormulario(),
        Swal.fire('¡Proceso Exitoso!', 'Referencia Ingresada', 'success'),
        this.volverPaginaPrincipal()
      }
    );
  }
}
