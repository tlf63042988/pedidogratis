import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, LoadingController } from '@ionic/angular';
import * as CryptoJS from 'crypto-js';
import { MapalugarretiroPage } from '../modals/mapalugarretiro/mapalugarretiro.page';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.page.html',
  styleUrls: ['./pedidos.page.scss'],
})
export class PedidosPage implements OnInit {
  secretKey = "123456&Descryption";
  myCustomCallIcon: string = "/assets/icons/call-volume.svg";
  maxTime: any;
  timer: any;
  hidevalue: boolean;
  acceso: string;
  hora:any;
  horaentrega:any;
  AmOrPm: string;
  AmOrPmLlegada: string;
  candado: boolean = false;
  tienda: string ='Juan Valdez San Miguel';
  codigolargo: string ='971679356';
  codigocorto: string ='3321';
  nombrecliente: string ='Juan Quispe';
  step: string = '1';
  direecionentrega: string = 'Av. Calle S/N';
  maparetiro: string;
  constructor(private router: Router,
private loadingCtrl: LoadingController,
    public modalController:ModalController
    ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    if(!this.maparetiro){
      this.maparetiro=undefined;
    }
    this.step="1";
    this.hora= new Date();
    var hours = this.hora.getHours();
    var minutes = this.hora.getMinutes();
    var ampm = hours >= 12 ? 'p.m.' : 'a.m.';
    this.AmOrPm=ampm;
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    console.log('strTime Retiro',strTime);

    this.acceso=localStorage.getItem('acceso');
    if(this.acceso){
        this.acceso=this.decrypt(this.acceso);
        if(this.acceso!='email'){
          this.StartTimer();
        }
        this.maxTime=localStorage.getItem('maxTime');
    
        if(this.maxTime>0){
          this.hidevalue==false
        }
  }
    }

  
ionChangeTIENDA(event){
  this.tienda=event.target.value;
}

StartTimer(){
  this.timer = setTimeout(x => 
    {
      this.maxTime -= 1;
      localStorage.setItem('maxTime', this.maxTime);

        if(this.maxTime <= 0) 
        { }

        if(this.maxTime>0){
          this.hidevalue = false;
          this.StartTimer();
        }
        
        else{
          //se acabo el cronometro!!!::  A continuacion...
            this.hidevalue = true;
            this.router.navigate(['/home'])

        }

    }, 1000);


}

cerrarmodal(){
  this.modalController.dismiss();
}

step2(){

    const loading = await this.loadingCtrl.create({
      message: 'Acepting Action',
      duration: 3000,
    });
    loading.present();



  setTimeout(() => 
  {





  //direccion aleatoria
  var myArray = ['Avenida Canto Bello - 431', 'Calle Enrique Barrón - 228', 'Calle Victor Lira - 218 B', 'Avenida A - 100 Nt Cercado', 'Calle MZ H, Int A. Lte. 36', 'Calle los Zafiros - 284 Urb. Santa Ines', 'Avenida Géminis - 327 Las Begonias', 'Avenida Alfonso Ugarte 951', 'AV. Luzuringa Lt 1 N° 432', 'Jr. Conde de la Vega 488', 'Av. Reynaldo Saavedra Pinon 33', 'Pérez de Tudela Cdra. 33', 'Jr.Crespo y Castillo cdra 17', 'Jr. Aguarico Cdra. 1400', 'Av. Peruanidad o Salaverry Cdra 3 ', 'Av. Libertad Cdra. 8 San Miguel', 'Cdra. 10 . con Jr. 3 de febrero', 'Av. Manco Capac Cdra. 7', 'Jr. Enrique Villar c/ Jr. C. Arrieta', 'General Mendiburu Cuadra 11', 'Unanue y Mendoza Merino 33', 'Calle Paez con Calle 12 Nro 33', 'Jr. Diaz Camejo Numero 3', 'Av. La Marina Cdra. 13 ', 'Av. Pio XII Cdra. 1/ Av. Elmer Faucett.', 'Av. Precursores - Maranga 22', 'Gral Vivanco Cdra. 5 F', ' Parque Ruiz, Jr. Pablo Bermudez 420', 'Mercado 12 de Octubre', 'AA.HH. Manzanilla 12', ' Biblioteca Municipal Jr. Humboldt'];
  var rand = Math.floor(Math.random()*myArray.length);
  var rValue = myArray[rand];
  console.log('direccion',rValue);
  this.direecionentrega=rValue;
  //direccion aleatoria
    
  //mapa aleatorio
      if(!this.maparetiro){
         setTimeout(() => 
         {
           this.maparetiro='assets/maparetiro1.png';
         },
      1000);
      }
      
  //mapa aleatorio


  this.horaentrega= new Date();
  var hours = this.horaentrega.getHours();
  var minutes = this.horaentrega.getMinutes();
  var ampm = hours >= 12 ? 'p.m.' : 'a.m.';
  this.AmOrPmLlegada=ampm;
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  console.log('strTime Llegada',strTime);

  this.modalController.dismiss();
  this.step='2';
  loading.dismiss();

  },
  1700);
    
  

}

  async AbrirModalDirecionRetiro(){

  const modal = await this.modalController.create({
    component: MapalugarretiroPage,
   
    componentProps: {
      'dataparaelmodal': this.maparetiro
    },
    
  });
  modal.onDidDismiss().then((data) => {
      console.log('data',data);
      if(data.data.dismissed){
        console.log('data.data.dismissed=',data.data.dismissed);
        this.maparetiro=data.data.dismissed;
      }
    });

  return await modal.present();

}

encrypt(value : string) : string{
  return CryptoJS.AES.encrypt(value, this.secretKey.trim()).toString();
}

decrypt(textToDecrypt : string){
  return CryptoJS.AES.decrypt(textToDecrypt, this.secretKey.trim()).toString(CryptoJS.enc.Utf8);
}




}
