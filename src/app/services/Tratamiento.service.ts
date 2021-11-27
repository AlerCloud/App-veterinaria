import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ITratamiento } from '../../interfaces/ITratamiento';

@Injectable()
export class TratamientoService {
    private urlTratamiento: string = 'http://localhost:3000/tratamiento';
    private urlVacuna: string = 'http://localhost:3000/vacunas';
    private urlOperacion: string = 'http://localhost:3000/operaciones';
    private urlDesparacitante: string = 'http://localhost:3000/desparacitaciones';
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

    /**
     * traerTratamientos
     */
    public traerTratamientos():Observable<Array<ITratamiento>> {
        return this.http.get<Array<ITratamiento>>(this.urlTratamiento, {
            headers:{
                'Content-Type':'application/json'
            }
        })
    }

    public traerVacunas(){
        return this.http.get(this.urlVacuna, {
            headers:{
                "Content-Type": "application/json"
            }
        })
    }
    public traerOperaciones(){
        return this.http.get(this.urlOperacion, {
            headers:{
                "Content-Type": "application/json"
            }
        })
    }
    public traerDesparacitaciones(){
        return this.http.get(this.urlDesparacitante, {
            headers:{
                "Content-Type": "application/json"
            }
        })
    }
}
