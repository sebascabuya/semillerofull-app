import { Component, OnInit } from '@angular/core';
import { DepartamentosService } from 'src/app/services/departamentos.service';

@Component({
  selector: 'app-departamentos',
  templateUrl: './departamentos.component.html',
  styleUrls: ['./departamentos.component.css']
})
export class DepartamentosComponent implements OnInit {

  mostrarListadoDepartamentos: boolean = true;

  constructor(private departamentosService: DepartamentosService) { }

  ngOnInit(): void {
  }

  getMostrarListadoDepartamentos(){
    this.mostrarListadoDepartamentos = !this.mostrarListadoDepartamentos;
  }
}
