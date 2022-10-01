import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {


  countryData =  [


  {"nombre":"Chifa Fong Loy","enlace":"assets/mapasretiro/chifa-fong-loy.png"},
  {"nombre":"Sanguchón Campesino - Alameda del Corregidor","enlace":"assets/mapasretiro/sanguchon-campesino-alameda-del-corregidor.png"},
  {"nombre":"Up Burger - La Rambla","enlace":"assets/mapasretiro/up-burger-la-rambla.png"},
  {"nombre":"Pickadeli - La Molina","enlace":"assets/mapasretiro/pickadeli-la-molina.png"},
  {"nombre":"Bembos Aviación","enlace":"assets/mapasretiro/bembos-aviacion.png"},
  {"nombre":"Pikadito Chicken","enlace":"assets/mapasretiro/pikadito-chicken.png"},
  {"nombre":"Papa John's Camacho","enlace":"assets/mapasretiro/papa-johns-camacho.png"},
  {"nombre":"Señor Limón - La Molina","enlace":"assets/mapasretiro/papa-johns-camacho.png"},
  {"nombre":"Papa John's Repsol","enlace":"assets/mapasretiro/papa-johns-repsol.png"},
  {"nombre":"Little Caesars' Pizza - La Molina","enlace":"assets/mapasretiro/little-cesar-pizza-la-molina.png"},
  {"nombre":"El Hornero - Circunvalación del Golf los I...","enlace":"assets/mapasretiro/el-hornero.png"},
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
  {"nombre":"Flora Tristan(varios para lejos)","enlace":"assets/mapasretiro/shimaya-ramen-flora-tristan.png"},
  {"nombre":"Chifa El Dorado 844","enlace":"assets/mapasretiro/shimaya-ramen-flora-tristan.png"},
  {"nombre":"Fudge You - La Molina","enlace":"assets/mapasretiro/fudge-you.png"},
  {"nombre":"Popeyes Metro Canadá","enlace":"assets/mapasretiro/popeyes-canada.png"},


{"nombre":"Camacho Varios Por Tambo (para lejos)","enlace":"assets/mapasretiro/camacho-varios-por-tambo.png"},
  {"nombre":"Mamma Tomato Pizza - Surco","enlace":"assets/mapasretiro/camacho-varios-por-tambo.png"},
  {"nombre":"Juicy Wraps - Patio Panorama","enlace":"assets/mapasretiro/camacho-varios-por-tambo.png"},
 

{"nombre":"Centro Comercial La Molina(para lejos)","enlace":"assets/mapasretiro/centro-comercial-la-molina.png"},
  {"nombre":"Juicy Lucy - La Molina","enlace":"assets/mapasretiro/centro-comercial-la-molina.png"},



{"nombre":"Jockey Plaza (para lejos)","enlace":"assets/mapasretiro/jockey-plaza.png"},
  {"nombre":"Quinoa Café - Jockey Plaza","enlace":"assets/mapasretiro/jockey-plaza.png"},


{"nombre":"Mall Aventura de Santa Anita (para lejos)","enlace":"assets/mapasretiro/mall-aventura-de-santa-anita-1.png"},
   {"nombre":"Mall Aventura de Santa Anita #2","enlace":"assets/mapasretiro/mall-aventura-de-santa-anita-2.png"},
   {"nombre":"Chinawok Santa Anita","enlace":"assets/mapasretiro/mall-aventura-de-santa-anita-1.png"},


{"nombre":"Real Plaza Puruchucu (para lejos)","enlace":"assets/mapasretiro/real-plaza-puruchucu-1.png"},
   {"nombre":"Papa John's Puruchuco","enlace":"assets/mapasretiro/real-plaza-puruchucu-1.png"},
   {"nombre":"Delicass - Puruchuco","enlace":"assets/mapasretiro/real-plaza-puruchucu-1.png"},


{"nombre":"Molicentro (Para Lejos)","enlace":"assets/mapasretiro/molicentro.png"},


{"nombre":"Centro Comercial El Polo (para lejos)","enlace":"assets/mapasretiro/el-polo.png"},



{"nombre":"Papa John's - Camacho","enlace":"assets/mapasretiro/chifa-fong-loy.png"},
{"nombre":"Pikadito Chicken","enlace":"assets/mapasretiro/chifa-fong-loy.png"},
{"nombre":"Bembos Aviación","enlace":"assets/mapasretiro/chifa-fong-loy.png"},
{"nombre":"Poke For The People - La Molina","enlace":"assets/mapasretiro/chifa-fong-loy.png"},
{"nombre":"Juicy Wraps - Patio Panorama(camacho-varios-por-bembos)","enlace":"assets/mapasretiro/chifa-fong-loy.png"},
{"nombre":"Rústica - Los Flamencos(ovalo Santa Anita)","enlace":"assets/mapasretiro/chifa-fong-loy.png"},
{"nombre":"Up Burger - La Rambla","enlace":"assets/mapasretiro/chifa-fong-loy.png"},
{"nombre":"Juicy Lucy - La Molina(centro comercial la Molina)","enlace":"assets/mapasretiro/chifa-fong-loy.png"},
{"nombre":"Naruto - La Molina","enlace":"assets/mapasretiro/chifa-fong-loy.png"},
{"nombre":"Chifa La Corte Dorada","enlace":"assets/mapasretiro/chifa-fong-loy.png"},
{"nombre":"María Almenara - Camacho(sirve papá jhons Camacho)","enlace":"assets/mapasretiro/chifa-fong-loy.png"},
{"nombre":"Carnívoro Salamanca","enlace":"assets/mapasretiro/chifa-fong-loy.png"},
{"nombre":"El Corralito(sirve carnívoro)","enlace":"assets/mapasretiro/chifa-fong-loy.png"},
{"nombre":"Señor Limón - La Molina(sirve papá jhons Camacho está a 2 locales)","enlace":"assets/mapasretiro/chifa-fong-loy.png"},
{"nombre":"Chifa El Dorado 844(sirve el que ya está de flora Tristán a ese duplicarlo también flora Tristán varios)","enlace":"assets/mapasretiro/chifa-fong-loy.png"},
{"nombre":"Popeyes Metro Canadá","enlace":"assets/mapasretiro/chifa-fong-loy.png"},
{"nombre":"Okami Sushi Bar - La Molina","enlace":"assets/mapasretiro/chifa-fong-loy.png"},
{"nombre":"Cevichería Fuego Azul","enlace":"assets/mapasretiro/chifa-fong-loy.png"},
{"nombre":"Mr.leito","enlace":"assets/mapasretiro/chifa-fong-loy.png"},
{"nombre":"Montao - Nicolás Ayllón (sirve mall aventura para lejos )","enlace":"assets/mapasretiro/chifa-fong-loy.png"},
{"nombre":"Los Criollos - La Molina","enlace":"assets/mapasretiro/chifa-fong-loy.png"},
{"nombre":"Don Mamino - La Molina","enlace":"assets/mapasretiro/chifa-fong-loy.png"},
{"nombre":"Chifa Pong Sem","enlace":"assets/mapasretiro/chifa-fong-loy.png"},
{"nombre":"Pardos Chicken - La Molina","enlace":"assets/mapasretiro/chifa-fong-loy.png"},
{"nombre":"Okami Sushi Bar - La Molina","enlace":"assets/mapasretiro/chifa-fong-loy.png"},
{"nombre":"Cevichería Miramar - La Molina","enlace":"assets/mapasretiro/chifa-fong-loy.png"},
{"nombre":"La Leña - Raúl Ferrero","enlace":"assets/mapasretiro/chifa-fong-loy.png"},
{"nombre":"Chifa Fung Shing - Corregidor","enlace":"assets/mapasretiro/chifa-fong-loy.png"},
{"nombre":"Pollería narch's( sirve Chifa fong loy, está alfrente )","enlace":"assets/mapasretiro/chifa-fong-loy.png"},
{"nombre":"Chifa Fung Shing - Constructores ( sirve fong loy, está alado)","enlace":"assets/mapasretiro/chifa-fong-loy.png"},
{"nombre":"Tortas Piero's - Ate","enlace":"assets/mapasretiro/chifa-fong-loy.png"},
{"nombre":"Farmer Chicken & Co","enlace":"assets/mapasretiro/chifa-fong-loy.png"},
{"nombre":"FILO","enlace":"assets/mapasretiro/chifa-fong-loy.png"},
{"nombre":"Amanti Pizzas","enlace":"assets/mapasretiro/chifa-fong-loy.png"},
{"nombre":"Pardos Chicken - La Molina","enlace":"assets/mapasretiro/chifa-fong-loy.png"},
{"nombre":"Protein Food Camacho( sirve bembos Camacho)","enlace":"assets/mapasretiro/chifa-fong-loy.png"},
{"nombre":"Secretos Árabes - La Molina","enlace":"assets/mapasretiro/chifa-fong-loy.png"},
{"nombre":"Roky's - Molina 2","enlace":"assets/mapasretiro/chifa-fong-loy.png"},




    ]



  constructor() { }
}
