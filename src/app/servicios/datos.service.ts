import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  url= 'https://narutodb.xyz/api/character';
  constructor(public http: HttpClient) { }

  getNarutoApi(){
    return this.http.get(this.url)
  }
  modifNarutoApi(id : any){
    return this.http.put(this.url, id)
  }
  eliminaPersonaje(){
    return this.http.delete(this.url)
  }
}
