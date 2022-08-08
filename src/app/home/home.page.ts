import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  maxTime: any;

  constructor(
    private datepipe : DatePipe,
 
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
    localStorage.setItem('maxTime', '30');
    localStorage.setItem('acceso', 'prueba');
    this.router.navigate(['/tablinks/estado'])
    
  }

  
PedirCorreo(){
  console.log('mostrando alerta para pedir que correo');
}


}
