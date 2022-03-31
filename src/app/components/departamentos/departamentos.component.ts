import { Component, OnInit } from '@angular/core';
import { faCoffee, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Departamentos } from 'src/app/models/departamentos';
import { DepartamentosService } from 'src/app/services/departamentos.service';

@Component({
  selector: 'app-departamentos',
  templateUrl: './departamentos.component.html',
  styleUrls: ['./departamentos.component.css']
})
export class DepartamentosComponent implements OnInit {

  listaDepartamentos: Departamentos[] = [];
  mostrarListadoDepartamentos: boolean = true;
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

  getMostrarListadoDepartamentos(){
    this.mostrarListadoDepartamentos = !this.mostrarListadoDepartamentos;
  }
}
