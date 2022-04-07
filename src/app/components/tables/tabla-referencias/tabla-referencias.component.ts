import { Component, OnInit } from '@angular/core';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Referencias } from 'src/app/models/referencias';
import { ReferenciasService } from 'src/app/services/referencias.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tabla-referencias',
  templateUrl: './tabla-referencias.component.html',
  styleUrls: ['./tabla-referencias.component.css']
})
export class TablaReferenciasComponent implements OnInit {

  listaReferencias: Referencias[];
  faPenToSquare = faPenToSquare;
  faTrash = faTrash;

  constructor(private referenciasService: ReferenciasService) { }

  ngOnInit(): void {
    this.getListadoReferencias();
  }

  getListadoReferencias(){
    this.referenciasService.getListaReferencias().subscribe(
      (referencias) => (this.listaReferencias = referencias)
    )
  }
  
  setIdReferenciaElegida(idReferencia: number){
    sessionStorage.setItem("Referencia Id", JSON.stringify(idReferencia))
  }

  eliminarReferencias(idReferencia: number){
    Swal.fire({
      title: 'Do you want to delete this reference?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Delete',
      denyButtonText: `Don't delete`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.referenciasService.deleteReferencias(idReferencia).subscribe(
          (rta) => {
            Swal.fire('Department deleted!', '', 'success')
            this.ngOnInit();
          }
        );
      } else if (result.isDenied) {
        Swal.fire('Reference was not deleted', '', 'info')
      }
    })
  }
}
