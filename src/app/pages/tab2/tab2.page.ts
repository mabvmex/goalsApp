import { Component } from '@angular/core';
import { GoalsService } from '../../servicios/goals.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public goalService: GoalsService) {

  }
}
