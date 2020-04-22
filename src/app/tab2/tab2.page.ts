import { Component } from '@angular/core';

enum ETAT { INITIAL, GAME, HIGH, LOW, WIN }

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  nombreRandome: number; // nombre proposer a l'utilisateur au hasard
  useNumber: number; // nombre proposer par l'utilisateur
  nombreTentative:number; //nombre d'essaye
  etat: ETAT = ETAT.INITIAL; //état initial


  constructor() {}

  //méthode

  start() {
    this.nombreTentative= 0;
    this.nombreRandome = Math.floor(Math.random() * 100) + 1;
    this.useNumber = null;
    this.etat = ETAT.GAME;
  }

  valid() {
    this.nombreTentative+= 1;
    if(this.useNumber) {
      if(+this.nombreRandome > +this.useNumber) this.etat =  ETAT.LOW; //1
      if(+this.nombreRandome < +this.useNumber) this.etat = ETAT.HIGH; //0
      if(+this.nombreRandome == +this.useNumber) this.etat = ETAT.WIN;//2
    } 
  }

  reset() {
    this.nombreTentative= 0;
    this.nombreRandome = Math.floor(Math.random() * 100) + 1;
    this.useNumber;
  }


}
