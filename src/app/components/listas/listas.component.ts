import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { AlertController, IonList } from '@ionic/angular';
import { GoalsService } from '../../servicios/goals.service';
import { Router } from '@angular/router';
import { Lista } from '../../models/lista.model';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {

  @ViewChild(IonList) lista: IonList;
  @Input() terminada = true;

  constructor(
    // No se importa el servicio en el modulo del componente, solo se inyectan y se usan y el componente html se considera publico.
    public goalsService: GoalsService,
    private router: Router,
    private alertCtrl: AlertController,
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

  async editarLista(lista: Lista) {
    const alert = await this.alertCtrl.create({
      header: 'Editar:',
      inputs: [
        {
          name: 'titulo',
          type: 'text',
          value: (lista.titulo),
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            this.lista.closeSlidingItems();
          }
        },
        {
          text: 'Actualizar',
          handler: (data) => {
            if (data.titulo.length === 0) {
              return;
            }
            lista.titulo = data.titulo;
            this.goalsService.guardarStorage();
            this.lista.closeSlidingItems();
          }
        }
      ]
    });
    await alert.present();
  }



}



