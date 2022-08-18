import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  myCustomIcon: string = "/assets/icons/custom-medal.svg";
  acceso: string;
  secretKey = "123456&Descryption";
  constructor(
    public router: Router
  ) 
  
  {
    this.VerificarLogin();
  }

  ionViewWillEnter(){
    this.VerificarLogin();
  }

  ionViewDidEnter(){
    this.VerificarLogin();
  }
  ionViewWillLeave(){
    this.VerificarLogin();
  }
  ionViewDidLeave(){
    this.VerificarLogin();
  }

  VerificarLogin(){
    
    this.acceso=localStorage.getItem('acceso');
    if(this.acceso){
      this.acceso=this.decrypt(this.acceso);
    }
    if(this.acceso=='email'){
      this.router.navigate(['/tablinks/estado'])
    }
    else{
      this.router.navigate(['/home'])
    }
  }

  encrypt(value : string) : string{
    return CryptoJS.AES.encrypt(value, this.secretKey.trim()).toString();
  }

  decrypt(textToDecrypt : string){
    return CryptoJS.AES.decrypt(textToDecrypt, this.secretKey.trim()).toString(CryptoJS.enc.Utf8);
  }

 volveryrecargar(){
}
  
}
