import { Component, OnInit } from '@angular/core';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Ciudades } from 'src/app/models/ciudades';
import { CiudadesService } from 'src/app/services/ciudades.service';
import Swal from 'sweetalert2';

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

  eliminarCiudades(ciudadId: number){
    Swal.fire({
      title: 'Do you want to delete this city?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Delete',
      denyButtonText: `Don't delete`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.ciudadesService.deleteCiudades(ciudadId).subscribe(
          (rta) => {
            Swal.fire('City deleted!', '', 'success'),
            this.ngOnInit()
          }
        );
      } else if (result.isDenied) {
        Swal.fire('City was not deleted', '', 'info')
      }
    })
  }

}
