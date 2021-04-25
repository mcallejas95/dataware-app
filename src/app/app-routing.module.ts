import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListaPersonajesComponent} from './rickymorty-components.module/lista-personajes/lista-personajes.component';
import {DetallePersonajeComponent} from './rickymorty-components.module/detalle-personaje/detalle-personaje.component';

const routes: Routes = [
  {
    path: '',
    component: ListaPersonajesComponent,
    data: {
      pageTitle: 'Personajes - Rick and Morty'
    }
  },
  {
    path: 'detalle/:id',
    component: DetallePersonajeComponent,
    data: {
      pageTitle: 'Detalle - Rick and Morty'
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
