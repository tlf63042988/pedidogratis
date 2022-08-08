import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor( public menu:MenuController, private router: Router) {
    
  }

  ionViewWillEnter() {
    console.log('dirigiendo al inicio...');
  this.menu.enable(false);
}
  veraccesodeldispositivo(){

    // this.router.navigate(['/tablinks'])

  }

}
