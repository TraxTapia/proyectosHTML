import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CargaArchivosComponent } from './carga-archivos/carga-archivos.component';
import { ListadoPeliculasComponent } from './Peliculas/listado-peliculas/listado-peliculas.component';

@NgModule({
  declarations: [
    AppComponent,
    CargaArchivosComponent,
    ListadoPeliculasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
