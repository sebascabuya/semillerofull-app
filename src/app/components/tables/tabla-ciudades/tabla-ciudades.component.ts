import { Component, OnInit } from '@angular/core';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Ciudades } from 'src/app/models/ciudades';
import { CiudadesService } from 'src/app/services/ciudades.service';

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

  constructor(
    private ciudadesService: CiudadesService
  ) { }

  ngOnInit(): void {
    this.getListadoCiudades();
  }

  getListadoCiudades(){
    this.ciudadesService.getListaCiudades().subscribe(
      (ciudadesRta) => (this.listaCiudades = ciudadesRta)
    )
  }

  setCiudadIdElegida(ciudadId: number){
    sessionStorage.setItem("Ciudad Id", JSON.stringify(ciudadId))
  }
}
