import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ITratamiento } from '../interfaces/ITratamiento';

@Injectable()
export class TratamientoService {
    private urlTratamiento: string = 'http://localhost:8000/tratamiento';
    private http: HttpClient
    constructor(client: HttpClient) {
        this.http = client;
    }

    public agregarTratamiento(nuevoTratamiento: ITratamiento): Observable<ITratamiento> {
        return this.http.post<ITratamiento>(this.urlTratamiento, JSON.stringify(nuevoTratamiento), {
            headers: {
                "Content-Type": "application/json"
            }
        })
    }
}
