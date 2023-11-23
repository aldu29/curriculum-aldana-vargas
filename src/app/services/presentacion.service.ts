import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PresentacionService {

  constructor(private http: HttpClient) { }
  obtenerPresentacion ():Observable<any>
{
  return this.http.get("./assets/presentacion.json");
}
}
