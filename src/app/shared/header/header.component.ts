import { Component } from '@angular/core';
import { DatosPersonalesService } from 'src/app/services/datos-personales.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  datosPersonales:any;
constructor(private datosPersonalesService: DatosPersonalesService)
  {
this.datosPersonalesService.obtenerDatosPersonales().subscribe(
{
  
}
)

}
}
