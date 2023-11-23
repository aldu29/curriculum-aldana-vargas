import { Component } from '@angular/core';
import { ExperienciaLaboralService } from '../services/experiencia-laboral.service';


@Component({
  selector: 'app-experiencia-laboral',
  templateUrl: './experiencia-laboral.component.html',
  styleUrls: ['./experiencia-laboral.component.css']
})
export class ExperienciaLaboralComponent {
experienciaLaboral:any;
constructor(private miServicio:ExperienciaLaboralService)
{
  this.miServicio.obtenerExperienciasLaborales().subscribe({
next: (data) => {
  this.experienciaLaboral=data["experiencia-laboral"];
},
error:(error) => {
  alert("Error, no se pudo acceder a la experiencia laboral");
  console.error(error);
}

  })
}

}
