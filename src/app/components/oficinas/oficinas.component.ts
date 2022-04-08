import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oficinas',
  templateUrl: './oficinas.component.html',
  styleUrls: ['./oficinas.component.css']
})
export class OficinasComponent implements OnInit {

  mostrarListadoOficinas: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  setMostrarListadoOficinas(){
    this.mostrarListadoOficinas = !this.mostrarListadoOficinas;
  }
}
