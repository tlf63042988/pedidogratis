import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tablinks',
  templateUrl: './tablinks.page.html',
  styleUrls: ['./tablinks.page.scss'],
})
export class TablinksPage implements OnInit {

  constructor(private menu: MenuController,  private router: Router) { }

  ngOnInit() {
    this.menu.enable(true);
  }

  ionViewWillEnter() {
  this.menu.enable(true);
  }

  openCustom() {
    this.menu.enable(true, 'pedidosya');
    this.menu.open('pedidosya');
  }



}
