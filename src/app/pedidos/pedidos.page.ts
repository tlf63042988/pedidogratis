import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.acceso=localStorage.getItem('acceso');
    if(!this.acceso||this.acceso!='email'){
      this.StartTimer();
    }
    this.maxTime=localStorage.getItem('maxTime');
    if(this.maxTime>0){
      this.hidevalue==false
    }
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






}
