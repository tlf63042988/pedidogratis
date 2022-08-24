import { Component, OnInit } from '@angular/core';
import { PaisesService } from '../../service/paises.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-mapalugarretiro',
  templateUrl: './mapalugarretiro.page.html',
  styleUrls: ['./mapalugarretiro.page.scss'],
})
export class MapalugarretiroPage implements OnInit {
  mapas: any;
  filterTerm: string;
  mostrarleusuarios:  boolean = false;
  selected_user: any;
  seleccion:any;
  dataparaelmodal;

  constructor(
    public modalController:ModalController,
    private paises: PaisesService
  ) 
  { 
    this.mapas=this.paises.countryData;    

  }
  
  ngOnInit() {
  }
  
  ionViewWillEnter(){
    this.mapas=this.paises.countryData;    
    this.mostrarleusuarios=false;

  }

  // estemapa(cadamapa, i){

  // }

  estemapa(cadamapa, index){
    console.log('Usuario',cadamapa);
    this.selected_user=cadamapa;
    this.seleccion=cadamapa;
    console.log('seleccion',this.seleccion);
  }


  borrarSelectedUserDeSeleccion(){
    this.seleccion=undefined;
  }



  mostrarleusuariosverdadero(){
    this.mostrarleusuarios=true;
  }
  mostrarleusuariosfalso(){
      setTimeout(() => 
      {
        this.mostrarleusuarios=false;
      },
      150);
}


dismiss() {

  this.modalController.dismiss();

}


dismissyactualiza() {
  // using the injected ModalController this page
  // can "dismiss" itself and optionally pass back data
  console.log('enviando dismissed', this.seleccion.enlace);
  if(this.seleccion){
    this.modalController.dismiss({
      'dismissed': this.seleccion.enlace
    });

  }

}


}
