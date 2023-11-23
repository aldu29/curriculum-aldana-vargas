import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatosAcademicosService {

  constructor(private http: HttpClient) { }

  obtenerDatosAcademicos ():Observable<any>
  {
    return this.http.get("./assets/datos-academicos.json");

  }
}
