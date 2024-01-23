import { Component, Input } from '@angular/core';
// import {CargaDocumento} from '../CargaArchivos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'GestionDocumentos';
  // @Input() carga!: CargaDocumento;
  Peliculas = {
    titulo: 'Max',
    FechaLanzamineto: new Date(),
  };
}
