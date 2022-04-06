import { Component, OnInit } from '@angular/core';
import { ReferenciasService } from 'src/app/services/referencias.service';

@Component({
  selector: 'app-referencias',
  templateUrl: './referencias.component.html',
  styleUrls: ['./referencias.component.css']
})
export class ReferenciasComponent implements OnInit {

  mostrarListadoReferencias: boolean = true;

  constructor(private referenciasService: ReferenciasService) { }

  ngOnInit(): void {
  }

  getMostrarListadoReferencias(){
    this.mostrarListadoReferencias = !this.mostrarListadoReferencias;
  }
}
