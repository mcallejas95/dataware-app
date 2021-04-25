import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListaPersonajesComponent} from './lista-personajes/lista-personajes.component';
import {DetallePersonajeComponent} from './detalle-personaje/detalle-personaje.component';
import {FormsModule} from '@angular/forms';
import {NgbTooltipModule} from '@ng-bootstrap/ng-bootstrap';
import {PersonajesService} from './lista-personajes/services/personajes.service';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    ListaPersonajesComponent,
    DetallePersonajeComponent
  ],
    imports: [
        CommonModule,
        FormsModule,
        NgbTooltipModule,
        RouterModule
    ],
  providers: [PersonajesService]
})
export class RickymortyModule {
}
