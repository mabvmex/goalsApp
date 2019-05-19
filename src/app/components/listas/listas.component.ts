import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { GoalsService } from '../../servicios/goals.service';
import { Lista } from '../../models/lista.model';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {

  @Input() terminada = true;

  constructor(
    // No se importa el servicio en el modulo del componente, solo se inyectan y se usan y el componente html se considera publico.
    public goalsService: GoalsService,
    private router: Router,
  ) { }

  ngOnInit() { }

  listaSeleccionada(lista: Lista) {
    if (this.terminada) {
      this.router.navigateByUrl(`/tabs/tab2/agregar/${lista.id}`);
    } else {
      this.router.navigateByUrl(`/tabs/tab1/agregar/${lista.id}`);
    }
  }
  borrarLista(lista: Lista) {
    this.goalsService.borrarLista(lista);
  }

}



