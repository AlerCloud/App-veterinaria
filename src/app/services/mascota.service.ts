import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMascota } from './imascota';
import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MascotaService {
  private url: string = 'http://localhost:3000/mascotas';
  private httpClient: HttpClient;

  constructor(client: HttpClient) {
    this.httpClient = client;
  }

  public getClient(): Observable<Array<IMascota>> {
    return this.httpClient.get<Array<IMascota>>(this.url, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  public addClient(newClient: IMascota): Observable<IMascota> {
    return this.httpClient.post<IMascota>(this.url, JSON.stringify(newClient), {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

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

  public updateClient(id: number, newData: IMascota) {
    return this.httpClient.patch(this.url + '/' + id, newData);
  }
}