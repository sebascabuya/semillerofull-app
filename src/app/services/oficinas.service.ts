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
}
