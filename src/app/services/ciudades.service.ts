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

  getConsultarCiudadPorId(ciudadId: number): Observable<Ciudades[]>{
    return this.http.get<Ciudades[]>(`${this.urlBase}/ciudades/consultarciudadbyid/${ciudadId}`, {headers: this.header})
  }

  postCiudades(ciudades: Ciudades): Observable<Ciudades>{
    return this.http.post<Ciudades>(`${this.urlBase}/ciudades/ingresarciudades`, ciudades, {headers: this.header})
  }

  putCiudades(ciudadId: number, ciudades: Ciudades): Observable<Ciudades>{
    return this.http.put<Ciudades>(`${this.urlBase}/ciudades/editarciudad/${ciudadId}`, ciudades, {headers: this.header})
  }

  deleteCiudades(ciudadId: number): Observable<Ciudades>{
    return this.http.delete<Ciudades>(`${this.urlBase}/ciudades/eliminarciudad/${ciudadId}`, {headers: this.header})
  }
}
