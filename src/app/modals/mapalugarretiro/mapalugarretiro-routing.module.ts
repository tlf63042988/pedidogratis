import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapalugarretiroPage } from './mapalugarretiro.page';

const routes: Routes = [
  {
    path: '',
    component: MapalugarretiroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapalugarretiroPageRoutingModule {}
