import { Component, Input, OnInit } from '@angular/core';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Departamentos } from 'src/app/models/departamentos';
import { DepartamentosService } from 'src/app/services/departamentos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tabla-departamentos',
  templateUrl: './tabla-departamentos.component.html',
  styleUrls: ['./tabla-departamentos.component.css']
})
export class TablaDepartamentosComponent implements OnInit {

  listaDepartamentos: Departamentos[];
  departamentos: Departamentos = new Departamentos();
  faPenToSquare = faPenToSquare;
  faTrash = faTrash;

  constructor(private departamentosService: DepartamentosService) { }

  ngOnInit(): void {
    this.getListadoDepartamentos();
  }

  getListadoDepartamentos(){
    this.departamentosService.getDepartamentos().subscribe(
      (departamentos) => (this.listaDepartamentos = departamentos)
    )
  }

  setIdDepartamentoElegido(idDepartamento: number){
    sessionStorage.setItem("Departamento Id", JSON.stringify(idDepartamento))
  }

  eliminarDepartamento(idDepartamento: number){
    Swal.fire({
      title: 'Do you want to delete this department?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Delete',
      denyButtonText: `Don't delete`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.departamentosService.deleteDepartamentos(idDepartamento).subscribe(
          (rta) => {
            Swal.fire('Department deleted!', '', 'success'),
            this.ngOnInit()
          }
        ); 
      } else if (result.isDenied) {
        Swal.fire('Department was not deleted', '', 'info')
      }
    })
  }
}