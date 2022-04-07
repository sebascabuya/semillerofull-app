import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ciudades',
  templateUrl: './ciudades.component.html',
  styleUrls: ['./ciudades.component.css']
})
export class CiudadesComponent implements OnInit {

  mostrarListadoCiudades: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  setMostrarListadoCiudades(){
    this.mostrarListadoCiudades = !this.mostrarListadoCiudades;
  }

}
