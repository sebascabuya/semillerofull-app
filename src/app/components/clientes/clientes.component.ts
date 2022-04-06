import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  mostrarListadoClientes: boolean = true;

  constructor(private clientesService: ClientesService) { }

  ngOnInit(): void {
  }

  getMostrarListadoClientes(){
    this.mostrarListadoClientes = !this.mostrarListadoClientes;
  }
}
