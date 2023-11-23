import { Component } from '@angular/core';
import { PresentacionService } from '../services/presentacion.service';

@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.component.html',
  styleUrls: ['./presentacion.component.css']
})
export class PresentacionComponent {
  presentacion:any;
  constructor(private miServicio:PresentacionService)
  {
    this.miServicio.obtenerPresentacion().subscribe({
      next:(data) => {
        this.presentacion=data["presentacion"];
      },
      error:(error) => {
        alert("Error, no se pudo acceder a la presentacion");
        console.error(error);
      }
    })
  }
}
