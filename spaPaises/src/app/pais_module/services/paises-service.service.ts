import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SearchRESTCountries, Name } from '../interfaces/countries.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisesServiceService {

  constructor(private httpClient:HttpClient) { }

  //VARIABLES PARA LA PETICIÓN
  url_base:string="https://restcountries.com/alpha/"; //para que nos vaya sacando info de los caracteres que vayamos introduciendo
  resultado: Name[] = [];

  buscarPaises(busqueda:string){//desde el componente por-pais le pasamos el nombre buscado y devolverá todo aquello que encaje con la búsqueda

    const params = new HttpParams()
    .set('q', busqueda);

    //La url que he buscado en thunderClient es https://restcountries.com/v2/all.
    this.httpClient.get<SearchRESTCountries>(this.url_base, {params:params}).subscribe(
      (resp) =>{
        console.log(resp);
       this.resultado = resp.name;
      }
    )
  }
}
