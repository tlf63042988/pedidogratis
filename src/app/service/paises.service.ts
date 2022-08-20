import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {


  countryData =  [
    {"nombre":"Mapa En Blanco","enlace":"assets/maparetiro1.png"},
    {"nombre":"con iconos","enlace":"assets/mapasretiro/prueba-con-iconos.png"},
   {"nombre":"Mapa retiro 2","enlace":"assets/maparetiro2.png"},
   {"nombre":"Mapa retiro 2","enlace":"assets/maparetiro2.png"},
   {"nombre":"Mapa retiro 2","enlace":"assets/maparetiro2.png"},
   {"nombre":"Mapa retiro 2","enlace":"assets/maparetiro2.png"},
   {"nombre":"Mapa retiro 2","enlace":"assets/maparetiro2.png"},
   {"nombre":"Mapa retiro 2","enlace":"assets/maparetiro2.png"},
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
