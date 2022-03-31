import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Departamentos } from '../models/departamentos';

@Injectable({
  providedIn: 'root'
})
export class DepartamentosService {

  private header = new HttpHeaders({
    'Content-type': 'application/json'
  }); 

  constructor(private http: HttpClient) { }

  getDepartamentos(): Observable<Departamentos[]>{
    return this.http.get<Departamentos[]>("http://localhost:8080/departamentos/listadepartamentos", {headers: this.header})
  }
}
