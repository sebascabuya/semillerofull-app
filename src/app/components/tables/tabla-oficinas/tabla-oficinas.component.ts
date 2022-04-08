import { Component, OnInit } from '@angular/core';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Oficinas } from 'src/app/models/oficinas';
import { OficinasService } from 'src/app/services/oficinas.service';

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
}
