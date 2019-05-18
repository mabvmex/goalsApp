import { Component, OnInit } from '@angular/core';
import { GoalsService } from '../../servicios/goals.service';
import { ActivatedRoute } from '@angular/router';
import { Lista } from '../../models/lista.model';
import { ListaItem } from '../../models/lista-item.model';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

  lista: Lista;
  nombreItem = '';

  constructor(
    private goalsService: GoalsService,
    private router: ActivatedRoute,
  ) {
    const listaId = this.router.snapshot.paramMap.get('listaId');
    this.lista = this.goalsService.obtenerLista(listaId);
  }


  agregarItem() {
    if (this.nombreItem.length === 0) {
      return;
    }

    const nuevoItem = new ListaItem(this.nombreItem);
    this.lista.items.push(nuevoItem);
    this.nombreItem = '';
    this.goalsService.guardarStorage();
  }

  cambioCheck(item: ListaItem) {
    // console.log(item);
    const pendientes = this.lista.items.filter(itemData => !itemData.completado).length;

    if (pendientes === 0) {
      this.lista.terminadaEn = new Date();
      this.lista.terminada = true;
    } else {
      this.lista.terminadaEn = null;
      this.lista.terminada = false;
    }
    this.goalsService.guardarStorage();
    console.log(this.goalsService.listas);
  }

  borrar(i: number) {
    this.lista.items.splice( i, 1);
    this.goalsService.guardarStorage();
  }


  ngOnInit() {
  }

}
