import { Component } from '@angular/core';
import { DatosPersonalesService } from '../services/datos-personales.service';

@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.component.html',
  styleUrls: ['./datos-personales.component.css']
})
export class DatosPersonalesComponent {
  datosPersonales:any;
constructor(private miServicio:DatosPersonalesService)
{
  this.miServicio.obtenerDatosPersonales().subscribe({
    next: (data) => {
      this.datosPersonales=data["datos-personales"];
    },
    error:(error) => {
      alert("Error no se pudo acceder a los datos personales");
      console.error(error);
    }
  })
 
}
}
