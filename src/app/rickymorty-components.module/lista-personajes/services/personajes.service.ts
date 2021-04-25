import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {PersonajeModel} from './personaje.model';
import {catchError, map} from 'rxjs/operators';
import {ResultsModel} from './results.model';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {
  private API_URL = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient) {
  }

  obtListaPersonajes(pagina: number = 1, personaje: string = ''): Observable<PersonajeModel> {
    return this.http.get<PersonajeModel>(this.API_URL + '?page=+' + pagina + '&name=' + personaje + '').pipe(
      catchError(e => {
        map(respuesta => respuesta as PersonajeModel);
        return throwError(e);
      })
    );
  }

  obtPersonaje(id: number): Observable<ResultsModel> {
    return this.http.get<ResultsModel>(this.API_URL + '/' + id).pipe(
      catchError(e => {
        map(respuesta => respuesta as ResultsModel);
        return throwError(e);
      })
    );
  }
}
