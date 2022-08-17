import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common'
import * as CryptoJS from 'crypto-js';
import {  LoadingController, AlertController } from '@ionic/angular';
import { VariosService } from '../service/varios.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  secretKey = "123456&Descryption";
  maxTime: any;
  email_escrito: any;

  constructor(
    public modalController:ModalController,
    private datepipe : DatePipe,
    private alertController: AlertController,
    public loadingController: LoadingController,
    public variosservicios: VariosService,
    public menu:MenuController, private router: Router) {
    
  }

  ionViewWillEnter() {
    console.log('dirigiendo al inicio...');
  this.menu.enable(false);
  this.maxTime=localStorage.getItem('maxTime');

}

  IniciarPrueba(){

    var fechaactual = this.datepipe.transform(new Date(), 'yyyyMMddhhmmss');
    console.log('fechaactualnumerica',fechaactual);
    if(!this.maxTime){
      localStorage.setItem('maxTime', '300');
    }
    localStorage.setItem('acceso', this.encrypt('prueba'));
    this.router.navigate(['/tablinks/estado']);

    setTimeout(x => 
      {
        this.modalController.dismiss();

  
      }, 3000);


    
  }

  
PedirCorreo(){
  console.log('mostrando alerta para pedir que correo');
}

encrypt(value : string) : string{
  return CryptoJS.AES.encrypt(value, this.secretKey.trim()).toString();
}

decrypt(textToDecrypt : string){
  return CryptoJS.AES.decrypt(textToDecrypt, this.secretKey.trim()).toString(CryptoJS.enc.Utf8);
}


  async abrirAlertaEmail(){
  const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: 'Email Autorizado:',
    message: 'Whats:971679356',
    inputs: [


      {
        name: 'enalertaemail',
        type: 'email',
        placeholder: 'Email',
        cssClass: 'specialClass',
        attributes: {
          maxlength: 40,
          inputmode: 'decimal',
          value:this.email_escrito
        },
      },
    ],
    buttons: [
      {
        text: 'Cancelar',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          console.log('Confirm Cancel');

        },
      },
      {
        text: 'Verificar',
        handler: async (alertData) => {
          console.log('Confirm Ok');
          console.log(alertData.enalertaemail);




          var datasolicitudfraccionamiento = {
            nombre_solicitud:'werathonverificarspanlistapedidos',
            email:alertData.enalertaemail
          }
          console.log('esta Info sale:',datasolicitudfraccionamiento);
      
          this.variosservicios.variasfunciones(datasolicitudfraccionamiento).subscribe(async (res: any ) =>{
            if(res){
              if(res.id>0){
                console.log('Confirmado el codigo ingresado dice que existe un carrete que coincide con esta rederencia');
                const codigoscoinciden = await this.loadingController.create({
                  message: 'Verificación exitosa, Espere...',spinner: 'bubbles',duration: 1000,
                  });
                  codigoscoinciden.present();
                  localStorage.setItem('acceso', this.encrypt('email'));
                  localStorage.setItem('email', this.encrypt(res.email));
                  this.router.navigate(['/tablinks/estado']);
              }
            }
            else{
              const incorrecto = await this.loadingController.create({
                message: 'Email no autorizado aun',spinner: 'bubbles',duration: 900,
                });
                incorrecto.present();
  
            }

            });



        },
      },
    ],
  });

  await alert.present();
}


}
