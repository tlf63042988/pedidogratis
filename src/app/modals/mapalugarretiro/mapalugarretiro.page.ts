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
  seleccion = [];
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
    // this.indexdeusuario= i;
    this.selected_user=cadamapa;

    this.mapas.splice(index, 1);
    this.seleccion[this.seleccion.length]=cadamapa;
    console.log('seleccion',this.seleccion);
  }


  borrarSelectedUserDeSeleccion(cadamapa, index){
    this.seleccion.splice(index, 1);
    this.mapas[this.mapas.length]=cadamapa;

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

  this.modalController.dismiss({
    'dismissed': this.mapas[0].enlace
  });

}


dismissyactualiza() {
  // using the injected ModalController this page
  // can "dismiss" itself and optionally pass back data
  console.log('enviando dismissed', this.mapas[0].enlace);
  if(this.seleccion&&this.seleccion.length>0){
    this.modalController.dismiss({
      'dismissed': this.seleccion[0].enlace
    });
    this.seleccion=undefined;    
  }

}



}
