import {Component, OnInit} from '@angular/core';
import {PersonajeModel} from './services/personaje.model';
import {PersonajesService} from './services/personajes.service';
import {Subscription} from 'rxjs';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';
import {ViewportScroller} from '@angular/common';

@Component({
  selector: 'app-lista-personajes',
  templateUrl: './lista-personajes.component.html',
  styleUrls: ['./lista-personajes.component.css']
})
export class ListaPersonajesComponent implements OnInit {
  public busquedaPersonaje = '';
  public paginaActual = 1;
  public personajes: PersonajeModel = {} as PersonajeModel;

  constructor(private personajesService: PersonajesService,
              private toastr: ToastrService,
              private router: Router,
              private scroll: ViewportScroller) {
  }

  ngOnInit(): any {
    this.listarPersonajes();
  }

  listarPersonajes(pagina: number = 1, personaje: string = '', busqueda: boolean = false): Subscription {
    return this.personajesService.obtListaPersonajes(pagina, personaje).subscribe(
      respuesta => {
        if (busqueda) {
          this.toastr.success('Búsqueda exitosa');
        }
        this.personajes = respuesta;
      }, error => {
        if (error !== undefined && error.status === 404) {
          if (busqueda) {
            this.toastr.info('No se encontro resultado');
          } else {
            this.toastr.error('Lo sentimos, información no disponible');
          }
        }
      }
    );
  }

  busquedas(event: any, n: number): void {
    console.log(event);
    if (event.key === 'Enter' || event.type === 'click') {
      if (this.busquedaPersonaje === null || this.busquedaPersonaje === '') {
        this.toastr.warning('Por favor, debe escribir algo');
        this.listarPersonajes(this.paginaActual, this.busquedaPersonaje, false);
      } else {
        this.paginaActual = n + 1;
        this.listarPersonajes(this.paginaActual, this.busquedaPersonaje, true);
      }
    }
  }

  verDetalle(id: number): void {
    this.router.navigate(['detalle/' + +id]);
  }

  paginacion(url: string, tipoPagina: string): void {
    let sigPagina;
    if (url !== undefined && url !== null) {
      sigPagina = url.split('page=', 2);
      this.listarPersonajes(+sigPagina[1], '', false);
    }
    if (tipoPagina === 'next') { this.paginaActual = this.paginaActual + 1;
    } else if (tipoPagina === 'prev') { this.paginaActual = this.paginaActual - 1; }
  }
}
