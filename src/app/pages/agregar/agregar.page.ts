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
    private GoalsService: GoalsService,
    private router: ActivatedRoute,
  ) {
    const listaId = this.router.snapshot.paramMap.get('listaId');
    this.lista = this.GoalsService.obtenerLista(listaId);
  }


  agregarItem() {
    if (this.nombreItem.length === 0) {
      return;
    }

    const nuevoItem = new ListaItem(this.nombreItem);
    this.lista.items.push(nuevoItem);
    this.nombreItem = '';
    this.GoalsService.guardarStorage();
}

  ngOnInit() {
  }

}
