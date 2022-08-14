import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.page.html',
  styleUrls: ['./pedidos.page.scss'],
})
export class PedidosPage implements OnInit {

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
  constructor(private router: Router,
    public modalController:ModalController
    ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
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
    if(!this.acceso||this.acceso!='email'){
      this.StartTimer();
    }
    this.maxTime=localStorage.getItem('maxTime');
    if(this.maxTime>0){
      this.hidevalue==false
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
}




}
