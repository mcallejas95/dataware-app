import {Component, Input, OnInit} from '@angular/core';
import {NgbModal, NgbModalModule} from '@ng-bootstrap/ng-bootstrap';
import {PersonajeModel} from '../lista-personajes/services/personaje.model';
import {ResultsModel} from '../lista-personajes/services/results.model';
import {Subscription} from 'rxjs';
import {PersonajesService} from '../lista-personajes/services/personajes.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-detalle-modal',
  templateUrl: './detalle-personaje.component.html',
  styleUrls: ['./detalle-personaje.component.css']
})
export class DetallePersonajeComponent implements OnInit {
  public personaje: ResultsModel = {} as ResultsModel;

  constructor(private personajesService: PersonajesService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.obtPersonaje(+id);
  }

  obtPersonaje(id: number): Subscription {
    return this.personajesService.obtPersonaje(id).subscribe(
      respuesta => {
        this.personaje = respuesta;
      });
  }
  regresarInicio(): void {
   this.router.navigate(['']);
  }
}
