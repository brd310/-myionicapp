import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  

  unite: any;
  uniteConv: any;
  tempSaisi: number;
  resultatC: number;

  reuls: number; 
  

  // c= (f-32)/1,8
  // f= c*1.8 + 32

  constructor() { }

  ngOnInit() {
  }

  
  convTemp(){

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
