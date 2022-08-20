import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  countryData =  [
    {"nombre":"mall santa anita","enlace":"assets/mall-santa-anita.png"},

    {"nombre":"algo","enlace":"assets/algo.png"}
    ]



  constructor() { }
}
