import { Component, OnInit } from '@angular/core';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Ciudades } from 'src/app/models/ciudades';

@Component({
  selector: 'app-tabla-ciudades',
  templateUrl: './tabla-ciudades.component.html',
  styleUrls: ['./tabla-ciudades.component.css']
})
export class TablaCiudadesComponent implements OnInit {

  ciudades: Ciudades = new Ciudades();
  listaCiudades: Ciudades[];
  faPenToSquare = faPenToSquare;
  faTrash = faTrash;

  constructor() { }

  ngOnInit(): void {
  }

}