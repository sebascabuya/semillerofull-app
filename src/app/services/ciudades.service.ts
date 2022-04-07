import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Ciudades } from '../models/ciudades';

@Injectable({
  providedIn: 'root'
})
export class CiudadesService {

  private urlBase: string = environment.urlBaseServicio;

  private header = new HttpHeaders(
    {'Content-type': 'application/json'}
  )

  constructor(
    private http: HttpClient
  ) { }

  getListaCiudades(): Observable<Ciudades[]>{
    return this.http.get<Ciudades[]>(`${this.urlBase}/ciudades/listaciudades`, {headers: this.header})
  }
}
