import { Component, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Departamentos } from 'src/app/models/departamentos';
import { DepartamentosService } from 'src/app/services/departamentos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario-actualizacion-departamentos',
  templateUrl: './formulario-actualizacion-departamentos.component.html',
  styleUrls: ['./formulario-actualizacion-departamentos.component.css']
})
export class FormularioActualizacionDepartamentosComponent implements OnInit {

  private departamento: Departamentos = new Departamentos();
  departamentoElegido: Departamentos[];
  public formulario: FormGroup;
  departamentoId = JSON.parse(sessionStorage.getItem("Departamento Id"));

  constructor(
    private departamentosService: DepartamentosService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.armarFormulario();
    this.getDepartmentById();
  }

  private armarFormulario(){
    this.formulario = new FormGroup({
      numCodigoDepartamento: new FormControl(this.departamento.numCodigoDepartamento, [Validators.required, Validators.minLength(1)]),
      strCodigoDaneDepartamento: new FormControl(this.departamento.strCodigoDaneDepartamento, [Validators.required, Validators.minLength(2)]),
      strNombreDepartamento: new FormControl(this.departamento.strNombreDepartamento, [Validators.required, Validators.minLength(5)]),
    })
  }

  volverPaginaPrincipal(): void{ 
    this.router.navigate(['/departamentos'], {relativeTo: this.route})
  }

  
  actualizarDepartamento(): void{
    this.departamento.strCodigoDaneDepartamento = this.formulario.value.strCodigoDaneDepartamento;
    this.departamento.strNombreDepartamento = this.formulario.value.strNombreDepartamento;
    this.departamentosService.putDepartamentos(this.departamentoId, this.departamento).subscribe(
      (departamentoRta) => 
      {
        this.ngOnInit()
      }
    );
    Swal.fire('¡Proceso Exitoso!', 'Departamento Actualizado', 'success')
    this.volverPaginaPrincipal();
    sessionStorage.removeItem("Departamento Id")
  }

  getDepartmentById(){
    this.formulario.get("numCodigoDepartamento").disable();
    this.departamentosService.getDepartamentoById(this.departamentoId).subscribe(
      (departamento) => {
        (this.departamentoElegido = departamento),
        this.formulario.patchValue({
          numCodigoDepartamento: this.departamentoElegido['numCodigoDepartamento'],  
          strCodigoDaneDepartamento: this.departamentoElegido['strCodigoDaneDepartamento'],
          strNombreDepartamento: this.departamentoElegido['strNombreDepartamento']
        })
      }
    )
  }
}
