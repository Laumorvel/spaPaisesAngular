import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaisesServiceService {

  constructor(private httpClient:HttpClient) { }

  //VARIABLES PARA LA PETICIÓN
  api_key:string="";
  url_base:string="";
  resultado: string[] = [];

  buscarPaises(busqueda:string){

  }
}
