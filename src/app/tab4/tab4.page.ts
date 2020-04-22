import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {



  unite1: any;
  unite2: any;
  resultat: number= 0;
  userNumber: number;


  unite: any;
  uniteConv: any;
  tempSaisi: number;
  resultatC: number;
  reuls: number; 
  
  start: string;
  

  constructor() { }

  ngOnInit() {
  }
   affichageTemp(){
    this.start = 'temp';
  }

  affichageLong(){
    this.start = 'long';
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
  convTemp() {
    if(this.tempSaisi){

      if(this.unite == 'celsius' && this.uniteConv == 'fahrenC'){
        console.log('celsius to fahren')
        this.resultatC = this.tempSaisi*1.8 + 32;
        this.reuls = Math.round(this.resultatC * 100) / 100
      }

      if(this.unite == 'celsius' && this.uniteConv == 'kelvinC'){
        console.log('celsius to kelvin')
        this.resultatC = this.tempSaisi*1 + 273.15;
        this.reuls = Math.round(this.resultatC * 100) / 100

      }

      if(this.unite == 'kelvin' && this.uniteConv == 'celciusC'){
        console.log('kelvin to celcius')
        this.resultatC = this.tempSaisi*1 - 273.15;
        this.reuls = Math.round(this.resultatC * 100) / 100

      }

      if(this.unite == 'kelvin' && this.uniteConv == 'fahrenC'){
        console.log('kelvin to fahren')
        this.resultatC = (this.tempSaisi*1 - 273.15) * 1.8 + 32;
        this.reuls = Math.round(this.resultatC * 100) / 100

      }

      if(this.unite == 'fahren' && this.uniteConv == 'celciusC'){
        console.log('farhren to celsius')
        this.resultatC = (this.tempSaisi*1 - 32 ) / 1.8;
        this.reuls = Math.round(this.resultatC * 100) / 100

      }

      if(this.unite == 'fahren' && this.uniteConv == 'kelvinC'){
        console.log('fahren to kelvin')
        this.resultatC = (this.tempSaisi*1 - 32 ) / 1.8 + 273.15;
        this.reuls = Math.round(this.resultatC * 100) / 100

      }
    }
  }

}
