import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapalugarretiroPageRoutingModule } from './mapalugarretiro-routing.module';

import { MapalugarretiroPage } from './mapalugarretiro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapalugarretiroPageRoutingModule
  ],
  declarations: [MapalugarretiroPage]
})
export class MapalugarretiroPageModule {}
