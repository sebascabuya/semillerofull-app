import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Departamentos } from '../models/departamentos';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DepartamentosService {

  private urlBase: string = environment.urlBaseServicio;

  private header = new HttpHeaders({
    'Content-type': 'application/json'
  }); 

  constructor(private http: HttpClient) { }

  getDepartamentos(): Observable<Departamentos[]>{
    return this.http.get<Departamentos[]>(`${this.urlBase}/departamentos/listadepartamentos`, {headers: this.header})
  }

  getDepartamentoById(departamentoId: number): Observable<Departamentos[]>{
    return this.http.get<Departamentos[]>(`${this.urlBase}/departamentos/consultardepartamentobyid/${departamentoId}`, {headers: this.header})
  }

  postDepartamentos(departamento: Departamentos): Observable<Departamentos>{
    return this.http.post<Departamentos>(`${this.urlBase}/departamentos/ingresardepartamento`, departamento, {headers: this.header})
  }

  putDepartamentos(departamentoId: number, departamento: Departamentos): Observable<Departamentos>{
    return this.http.put<Departamentos>(`${this.urlBase}/departamentos/editardepartamento/${departamentoId}`, departamento, {headers: this.header})
  }

  deleteDepartamentos(departamentoId: number): Observable<Departamentos>{
    return this.http.delete<Departamentos>(`${this.urlBase}/departamentos/eliminardepartamento/${departamentoId}`, {headers: this.header})
  }
}
