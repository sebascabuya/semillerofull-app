import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Referencias } from '../models/referencias';

@Injectable({
  providedIn: 'root'
})
export class ReferenciasService {

  private urlBase: string = environment.urlBaseServicio;

  private header = new HttpHeaders({
    'Content-type': 'application/json'
  });

  constructor(private http: HttpClient) { }

  getListaReferencias(): Observable<Referencias[]>{
    return this.http.get<Referencias[]>(`${this.urlBase}/referencias/listareferencias`, {headers: this.header})
  }
}
