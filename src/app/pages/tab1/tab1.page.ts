import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import { Lista } from '../../models/lista.model';
import { AlertController } from '@ionic/angular';
import { GoalsService } from '../../servicios/goals.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(
    public goalsService: GoalsService,
    private router: Router,
    private alertCtrl: AlertController) {
  }

  async agregarLista() {
    const alert = await this.alertCtrl.create({
      header: 'Nueva lista',
      inputs: [
        {
          name: 'titulo',
          type: 'text',
          placeholder: 'Nombre de nueva lista'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('cancelar');
          }
        },
        {
          text: 'Crear',
          handler: (data) => {
            // console.log(data);
            if (data.titulo.length === 0) {
              return;
            }
            const listaId = this.goalsService.crearLista(data.titulo);
            this.router.navigateByUrl(`/tabs/tab1/agregar/${listaId}`);

          }
        }
      ]
    });
    await alert.present();
  }
  // listaSeleccionada(lista: Lista) {
  //   this.router.navigateByUrl(`/tabs/tab1/agregar/${lista.id}`);
  // }
}
