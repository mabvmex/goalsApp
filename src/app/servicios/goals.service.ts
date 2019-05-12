import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class GoalsService {

  listas: Lista[] = [];

  constructor() {
    console.log('servico de LISTA inicializado');

    const lista1 = new Lista ('Recolectar piedras del infinito');
    const lista2 = new Lista ('Recuperar el trono de hierro');

    this.listas.push(lista1, lista2);
    // console.log(this.listas);

   }


}
