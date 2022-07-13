//É ARUI QUE SE IMPORTA OS MÓDULOS E BIBLIOTÉCAS
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  //TODA BUBLIOTECA IMPORTADA LA EM CIMA DEVE SER IMPORTADA AQUI
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
