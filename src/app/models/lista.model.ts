import { ListaItem } from './lista-item.model';

export class Lista {

    id: number;
    titulo: string;
    creadaEn: Date;
    terminada: boolean;
    items: ListaItem[];

    constructor(titulo: string) {
    this.titulo = titulo;
    this.creadaEn = new Date(),
    this.terminada = false;
    this.items = [];
    this.id = new Date().getTime();
        // El id es número entero unico, imposible de repetir. Lo ideal es que sea por DB

    }
}

 