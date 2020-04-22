import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  //propriétés
  compteur: number=0;


  constructor() {}

  //méthodes
  inc() {
    this.compteur += 1;
  }

  dec() {
    this.compteur -= 1;
  }

}
