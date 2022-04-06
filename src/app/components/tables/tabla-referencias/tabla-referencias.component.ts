import { Component, OnInit } from '@angular/core';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Referencias } from 'src/app/models/referencias';
import { ReferenciasService } from 'src/app/services/referencias.service';

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
}
