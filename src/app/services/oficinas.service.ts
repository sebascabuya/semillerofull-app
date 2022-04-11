import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Oficinas } from '../models/oficinas';

@Injectable({
  providedIn: 'root'
})
export class OficinasService {

  private urlBase: string = environment.urlBaseServicio;

  constructor(private http: HttpClient) { }

  private header = new HttpHeaders(
    {'Content-type': 'application/json'}
  )

  getListaOficinas(): Observable<Oficinas[]>{
    return this.http.get<Oficinas[]>(`${this.urlBase}/oficinas/listaoficinas`, {headers: this.header})
  }
  
  getOficinaById(oficinaId: number): Observable<Oficinas[]>{
    return this.http.get<Oficinas[]>(`${this.urlBase}/oficinas/oficinabyid/${oficinaId}`, {headers: this.header})
  }

  postOficinas(oficinas: Oficinas): Observable<Oficinas>{
    return this.http.post<Oficinas>(`${this.urlBase}/oficinas/ingresaroficina`, oficinas, {headers: this.header})
  }

  putOficinas(oficinaId: number, oficinas: Oficinas): Observable<Oficinas>{
    return this.http.put<Oficinas>(`${this.urlBase}/oficinas/actualizaroficina/${oficinaId}`, oficinas, {headers: this.header})
  }

  deleteOficinas(oficinaId: number): Observable<Oficinas>{
    return this.http.delete<Oficinas>(`${this.urlBase}/oficinas/eliminaroficina/${oficinaId}`, {headers: this.header})
  }
}
