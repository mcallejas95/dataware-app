import {OrigenPersonajeModel} from './origin.model';

export interface ResultsModel {
  id?: number;
  name?: string;
  status?: string;
  gender?: string;
  image?: string;
  species?: string;
  origin?: OrigenPersonajeModel;
}
