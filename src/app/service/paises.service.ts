import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {


  countryData =  [
    
    {"nombre":"con iconos","enlace":"assets/mapasretiro/av-huarochiri-av-metropolitana.png"},
   {"nombre":"Mapa retiro 2","enlace":assets/mapasretiro/bembos-la-fontana.png"},
   {"nombre":"Mapa retiro 2","enlace":"assets/mapasretiro/la-lucha-larco.png/mapasretiro/bembos-la-fontana.png"},
   {"nombre":"Mapa retiro 2","enlace":"assets/mapasretiro/las-canastas-la-molina.png"},
   {"nombre":"Mapa retiro 2","enlace":"assets/mapasretiro/mall-aventura-de-santa-anita-1.png"},
   {"nombre":"Mapa retiro 2","enlace":"assets/mapasretiro/mall-aventura-de-santa-anita-2.png"},
   {"nombre":"Mapa retiro 2","enlace":"assets/mapasretiro/metro-la-molina.png"},
   {"nombre":"Mapa retiro 2","enlace":"assets/mapasretiro/municipalidad-de-santa-anita.png"},
   {"nombre":"Mapa retiro 2","enlace":"assets/mapasretiro/pardos-chicken-javier-prado-ingenieros.png"},
   {"nombre":"Mapa retiro 2","enlace":"assets/mapasretiro/prueba-con-iconos.png"},
   {"nombre":"Mapa retiro 2","enlace":"assets/mapasretiro/real-plaza-puruchucu-1.png"},
   {"nombre":"Mapa retiro 2","enlace":"assets/mapasretiro/roll-star-sushi-bar-1.png"},
   {"nombre":"Mapa retiro 2","enlace":"assets/mapasretiro/wong-ate.png"}
    ]



  constructor() { }
}
