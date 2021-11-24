import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMascota } from 'src/interfaces/IMascota';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  url: string = "http://localhost:3000/mascotas";
  private client: HttpClient;
  constructor(moduloHttp: HttpClient) {
    this.client = moduloHttp;
  }

  public ListarDatos(): Observable<Array<IMascota>> {
    return this.client.get<Array<IMascota>>(this.url);
  }

  public agregarDato(datoNuevo: IMascota): Observable<IMascota>{
    return this.client.post<IMascota>(this.url, JSON.stringify(datoNuevo),{
      headers: {
        "Content-type":"application/json" 
      }
    });
  }
   
}
