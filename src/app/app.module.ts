import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { DatosPersonalesComponent } from './datos-personales/datos-personales.component';
import { ExperienciaLaboralComponent } from './experiencia-laboral/experiencia-laboral.component';
import { PresentacionComponent } from './presentacion/presentacion.component';
import { DatosAcademicosComponent } from './datos/datos-academicos/datos-academicos.component';
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DatosPersonalesComponent,
    PresentacionComponent,
    DatosAcademicosComponent,
    ExperienciaLaboralComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
