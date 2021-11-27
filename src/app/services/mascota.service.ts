import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { IMascota } from 'src/interfaces/IMascota';
// import { IMascota2 } from './imascota';
// import { IMascota } from 'src/interfaces/IMascota';

@Injectable({
  providedIn: 'root',
})
export class MascotaService {
  private url: string = 'http://localhost:3000/mascotas';
  private httpClient: HttpClient;

  constructor(client: HttpClient) {
    this.httpClient = client;
  }

  // public getClient(): Observable<Array<IMascota2>> {
  //   return this.httpClient.get<Array<IMascota2>>(this.url, {
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   });
  // }

  // public addClient(newClient: IMascota2): Observable<IMascota2> {
  //   return this.httpClient.post<IMascota2>(this.url, JSON.stringify(newClient), {
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   });
  // }

  public deleteClient(id: number) {
    return this.httpClient.delete<any>(this.url + '/' + id).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  // public updateClient(newData: IClient): Observable<IClient> {
  //   return this.httpClient.patch<IClient>(this.url, JSON.stringify(newData), {
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   });
  // }

  // public updateClient(id: number, newData: IMascota2) {
  //   return this.httpClient.patch(this.url + '/' + id, newData);
  // }

  public getMascota(id:number): Observable<IMascota>{
    return this.httpClient.get<IMascota>(this.url+'/'+id,{
      headers:{
        'Content-Type':'application/json'
      }
    });


  }
}