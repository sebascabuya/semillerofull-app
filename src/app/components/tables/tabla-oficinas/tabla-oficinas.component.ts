import { Component, OnInit } from '@angular/core';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Oficinas } from 'src/app/models/oficinas';
import { OficinasService } from 'src/app/services/oficinas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tabla-oficinas',
  templateUrl: './tabla-oficinas.component.html',
  styleUrls: ['./tabla-oficinas.component.css']
})
export class TablaOficinasComponent implements OnInit {

  listaOficinas: Oficinas[];
  faPenToSquare = faPenToSquare;
  faTrash = faTrash;

  constructor(private oficinasService: OficinasService) { }

  ngOnInit(): void {
    this.getListadoOficinas();
  }

  getListadoOficinas(){
    this.oficinasService.getListaOficinas().subscribe(
      (oficinasRta) => {
        (this.listaOficinas = oficinasRta)
      }
    )
  }

  setIdOficinaElediga(oficinaId: number){
    sessionStorage.setItem("Oficina Id", JSON.stringify(oficinaId))
  }

  eliminarOficinas(oficinaId: number){
    Swal.fire({
      title: 'Do you want to delete this Office?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Delete',
      denyButtonText: `Don't delete`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.oficinasService.deleteOficinas(oficinaId).subscribe(
          (rta) => {
            Swal.fire('Office deleted!', '', 'success'),
            this.ngOnInit()
          }
        ); 
      } else if (result.isDenied) {
        Swal.fire('Office was not deleted', '', 'info')
      }
    })
  }
}
