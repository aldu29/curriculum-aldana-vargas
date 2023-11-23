import { Component } from '@angular/core';
import { DatosAcademicosService } from 'src/app/services/datos-academicos.service';

@Component({
  selector: 'app-datos-academicos',
  templateUrl: './datos-academicos.component.html',
  styleUrls: ['./datos-academicos.component.css']
})
export class DatosAcademicosComponent {
  datosAcademicos:any;
  constructor(private miServicio:DatosAcademicosService)
  {
    this.miServicio.obtenerDatosAcademicos().subscribe({
      next: (data) => {
        this.datosAcademicos=data["datos-academicos"];
      },
      error:(error) => {
        alert("Error no se pudo acceder a los datos academicos");
        console.error(error);
      }
    })
   
  }
}


