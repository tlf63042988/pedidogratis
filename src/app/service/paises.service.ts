import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {


  countryData =  [

  {"nombre":"Up Burger - La Rambla","enlace":"assets/mapasretiro/up-burger-la-rambla.png"},
  {"nombre":"Pickadeli - La Molina","enlace":"assets/mapasretiro/pickadeli-la-molina.png"},
  {"nombre":"Bembos Aviación","enlace":"assets/mapasretiro/bembos-aviacion.png"},
  {"nombre":"Pikadito Chicken","enlace":"assets/mapasretiro/pikadito-chicken.png"},
  {"nombre":"Papa John's Camacho","enlace":"assets/mapasretiro/papa-johns-camacho.png"},
  {"nombre":"Papa John's Repsol","enlace":"assets/mapasretiro/papa-johns-repsol.png"},
  {"nombre":"Little Caesar Pizza # La Molina","enlace":"assets/mapasretiro/little-cesar-pizza-la-molina.png"},
  {"nombre":"El Hornero","enlace":"assets/mapasretiro/el-hornero.png"},
  {"nombre":"Av Huarochiri Av metropolitana","enlace":"assets/mapasretiro/av-huarochiri-av-metropolitana.png"},
  {"nombre":"Bembos - La Fontana","enlace":"assets/mapasretiro/bembos-la-fontana.png"},
  {"nombre":"La Lucha # Larco","enlace":"assets/mapasretiro/la-lucha-larco.png"},
  {"nombre":"Las Canastas # La Molina","enlace":"assets/mapasretiro/las-canastas-la-molina.png"},
  {"nombre":"Metro # La Molina","enlace":"assets/mapasretiro/metro-la-molina.png"},
  {"nombre":"Municipalidad de Santa Anita","enlace":"assets/mapasretiro/municipalidad-de-santa-anita.png"},
  {"nombre":"Pardos Chicken # La Molina - Javier Prado C/ Ingenieros","enlace":"assets/mapasretiro/pardos-chicken-javier-prado-ingenieros.png"},
  {"nombre":"Mapa en blanco","enlace":"assets/mapasretiro/prueba-con-iconos.png"},
   {"nombre":"Roll Star Suchi Bar # La Molina","enlace":"assets/mapasretiro/roll-star-sushi-bar-1.png"},
   {"nombre":"Wong - Ate","enlace":"assets/mapasretiro/wong-ate.png"},
   {"nombre":"Ohayo Sushi Bar","enlace":"assets/mapasretiro/ohayo-sushi-bar.png"},
   {"nombre":"Poke For The People - La Molina","enlace":"assets/mapasretiro/poke-for-the-people-la-molina.png"},
   {"nombre":"Shimaya Ramen - Flora Tristan","enlace":"assets/mapasretiro/shimaya-ramen-flora-tristan.png"},



{"nombre":"Camacho Varios Por Tambo","enlace":"assets/mapasretiro/camacho-varios-por-tambo.png"},
  {"nombre":"Mamma Tomato Pizza - Surco","enlace":"assets/mapasretiro/camacho-varios-por-tambo.png"},
  {"nombre":"Juicy Wraps - Patio Panorama","enlace":"assets/mapasretiro/camacho-varios-por-tambo.png"},
 

{"nombre":"Centro Comercial La Molina(para lejos)","enlace":"assets/mapasretiro/centro-comercial-la-molina.png"},


{"nombre":"Jockey Plaza (para lejos)","enlace":"assets/mapasretiro/jockey-plaza.png"},
  {"nombre":"Quinoa Café - Jockey Plaza","enlace":"assets/mapasretiro/jockey-plaza.png"},


{"nombre":"Mall Aventura de Santa Anita #1","enlace":"assets/mapasretiro/mall-aventura-de-santa-anita-1.png"},
   {"nombre":"Chinawok Santa Anita","enlace":"assets/mapasretiro/mall-aventura-de-santa-anita-1.png"},
   {"nombre":"Mall Aventura de Santa Anita #2","enlace":"assets/mapasretiro/mall-aventura-de-santa-anita-2.png"},


{"nombre":"Real Plaza Puruchucu #1","enlace":"assets/mapasretiro/real-plaza-puruchucu-1.png"},
   {"nombre":"Papa John's Puruchuco","enlace":"assets/mapasretiro/real-plaza-puruchucu-1.png"},


{"nombre":"Molicentro (Para Lejos)","enlace":"assets/mapasretiro/molicentro.png"}

    ]



  constructor() { }
}
