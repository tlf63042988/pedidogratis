import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {


  countryData =  [
    
    {"nombre":"Av Huarochiri Av metropolitana","enlace":"assets/mapasretiro/av-huarochiri-av-metropolitana.png"},
   {"nombre":"Bembos La Fontana","enlace":assets/mapasretiro/bembos-la-fontana.png"},
   {"nombre":"La Lucha Larco","enlace":"assets/mapasretiro/la-lucha-larco.png"},
   {"nombre":"Las Canastas La Molina","enlace":"assets/mapasretiro/las-canastas-la-molina.png"},
   {"nombre":"Mall Aventura de Santa Anita #1","enlace":"assets/mapasretiro/mall-aventura-de-santa-anita-1.png"},
   {"nombre":"Mall Aventura de Santa Anita #2","enlace":"assets/mapasretiro/mall-aventura-de-santa-anita-2.png"},
   {"nombre":"Metro La Molina","enlace":"assets/mapasretiro/metro-la-molina.png"},
   {"nombre":"Municipalidad de Santa Anita","enlace":"assets/mapasretiro/municipalidad-de-santa-anita.png"},
   {"nombre":"Pardos Chicken Javier Prado C/ Ingenieros","enlace":"assets/mapasretiro/pardos-chicken-javier-prado-ingenieros.png"},
   {"nombre":"Mapa en blanco","enlace":"assets/mapasretiro/prueba-con-iconos.png"},
   {"nombre":"Real Plaza Puruchucu #1","enlace":"assets/mapasretiro/real-plaza-puruchucu-1.png"},
   {"nombre":"Roll Star Suchi Bar #1","enlace":"assets/mapasretiro/roll-star-sushi-bar-1.png"},
   {"nombre":"Wong Ate","enlace":"assets/mapasretiro/wong-ate.png"}
    ]



  constructor() { }
}
