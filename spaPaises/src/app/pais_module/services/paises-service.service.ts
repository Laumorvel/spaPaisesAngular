import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaisesServiceService {

  constructor(private httpClient:HttpClient) { }

  //VARIABLES PARA LA PETICIÓN
  api_key:string="";
  url_base:string="https://restcountries.com/"; //v3.1 para datos y así para flags
  resultado: string[] = [];

  buscarPaises(busqueda:string){//desde el componente por-pais le pasamos el nombre buscado y devolverá todo aquello que encaje con la búsqueda

    const params = new HttpParams()
    .set('api_key', this.api_key)
    .set('q', busqueda);

    this.httpClient.get<string>(this.url_base, {params:params}).subscribe(
      (resp) =>{
        console.log(resp);
       // this.resultado = resp.data;
      }
    )
  }
}
