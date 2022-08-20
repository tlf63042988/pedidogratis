import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { MapalugarretiroPageRoutingModule } from './mapalugarretiro-routing.module';

import { MapalugarretiroPage } from './mapalugarretiro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ng2SearchPipeModule,
    MapalugarretiroPageRoutingModule
  ],
  declarations: [MapalugarretiroPage]
})
export class MapalugarretiroPageModule {}
