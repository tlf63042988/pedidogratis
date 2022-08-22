import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {


  countryData =  [
    {"nombre":"Mapa En Blanco","enlace":"assets/maparetiro1.png"},
    {"nombre":"con iconos","enlace":"assets/mapasretiro/av-huarochiri-av-metropolitana.png"},
   {"nombre":"Mapa retiro 2","enlace":assets/mapasretiro/bembos-la-fontana.png"},
   {"nombre":"Mapa retiro 2","enlace":"assets/mapasretiro/la-lucha-larco.png/mapasretiro/bembos-la-fontana.png"},
   {"nombre":"Mapa retiro 2","enlace":"assets/mapasretiro/las-canastas-la-molina.png"},
   {"nombre":"Mapa retiro 2","enlace":"assets/mapasretiro/mall-aventura-de-santa-anita-1.png"},
   {"nombre":"Mapa retiro 2","enlace":"assets/mapasretiro/mall-aventura-de-santa-anita-2.png"},
   {"nombre":"Mapa retiro 2","enlace":"assets/mapasretiro/metro-la-molina.png"},
   {"nombre":"Mapa retiro 2","enlace":"assets/maparetiro2.png"},
   {"nombre":"Mapa retiro 2","enlace":"assets/maparetiro2.png"},
   {"nombre":"Mapa retiro 2","enlace":"assets/maparetiro2.png"},
   {"nombre":"Mapa retiro 2","enlace":"assets/maparetiro2.png"},
   {"nombre":"Mapa retiro 2","enlace":"assets/maparetiro2.png"},

   {"nombre":"Mapa retiro 2","enlace":"assets/maparetiro2.png"},
   {"nombre":"Mapa retiro 2","enlace":"assets/maparetiro2.png"},

   {"nombre":"Mapa retiro 2","enlace":"assets/maparetiro2.png"},

    {"nombre":"Mall Aventura Santa Anita:Popeyes|ChinaWok|Donkin Donus|","enlace":"assets/mall-aventura-santa-anita.png"},
    ]



  constructor() { }
}
