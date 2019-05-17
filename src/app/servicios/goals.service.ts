import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class GoalsService {

  listas: Lista[] = [];

  constructor() {
    console.log('servico de LISTA inicializado');

    this.cargarStorage();
    // const lista1 = new Lista ('Recolectar piedras del infinito');
    // const lista2 = new Lista ('Recuperar el trono de hierro');

    // this.listas.push(lista1, lista2);
    // console.log(this.listas);

  }

  crearLista(titulo: string) {

    const nuevaLista = new Lista(titulo);
    this.listas.push(nuevaLista);
    this.guardarStorage();
    return nuevaLista.id;
  }

  obtenerLista(id: string | number) { // si se lee por el url o si se obtiene del arreglo
    id = Number(id);  // necesitamos estar seguros que es siempre un numero
    return this.listas.find(listaData => listaData.id === id); 
  }


  guardarStorage() {
    localStorage.setItem('data', JSON.stringify(this.listas));
  }

  cargarStorage() {
    if (localStorage.getItem('data')) {
      this.listas = JSON.parse(localStorage.getItem('data'));
    } // else {
    // this.listas = []; // El ese está de más porque cuando se inicializa la lista ya es tipo arreglo.
    // }
    // Si no tenemos nada guardada en el storage, dara null, hay que validar
  }

}
