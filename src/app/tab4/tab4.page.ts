import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {


  unite1: any;
  unite2: any;
  resultat:number= 0;
  userNumber: number;

  constructor() { }

  ngOnInit() {
  }

  convert() {
    if(this.userNumber) {
       if(this.unite1 == 'metre' && this.unite2 == 'centimetre') {
         this.resultat = this.userNumber * 100;
       }
       if(this.unite1 == 'metre' && this.unite2 == 'mile') {
         this.resultat = this.userNumber / 1609;
       }
       if(this.unite1 == 'metre' && this.unite2 == 'pouce') {
        this.resultat = this.userNumber * 39.37;
      }
      if(this.unite1 == 'centimetre' && this.unite2 == 'metre') {
        this.resultat = this.userNumber / 100;
      }
      if(this.unite1 == 'centimetre' && this.unite2 == 'mile') {
        this.resultat = this.userNumber / 160934;
      }
      if(this.unite1 == 'centimetre' && this.unite2 == 'pouce') {
        this.resultat = this.userNumber / 2.54;
      }
      if(this.unite1 == 'mile' && this.unite2 == 'metre') {
        this.resultat = this.userNumber * 1609;
      }
      if(this.unite1 == 'mile' && this.unite2 == 'centimetre') {
        this.resultat = this.userNumber * 160934;
      }
      if(this.unite1 == 'mile' && this.unite2 == 'pouce') {
        this.resultat = this.userNumber * 63360;
      }
      if(this.unite1 == 'pouce' && this.unite2 == 'metre') {
        this.resultat = this.userNumber / 39.37;
      }
      if(this.unite1 == 'pouce' && this.unite2 == 'mile') {
        this.resultat = this.userNumber / 63360;
      }
      if(this.unite1 == 'pouce' && this.unite2 == 'centimetre') {
        this.resultat = this.userNumber * 2.54;
      }
    }
  }

}
