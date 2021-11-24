import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IMascota } from 'src/interfaces/IMascota';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  public dato: IMascota = {
    foto_perfil:'',
    nombre: '',
    especie: '',
    raza: '',
    fecha: ''

  }

  mascotas: any = [];
  private servicio: RestService
  constructor(
    private http: HttpClient, datoServicio: RestService) { }

    public agregarDato(){
      console.log(this.dato);
      this.servicio.agregarDato(this.dato)
      .subscribe( respuesta =>{
        console.log(respuesta);
      })
    }
  

  ngOnInit() {
    
    this.getmascota().subscribe(res=>{
      console.log("Res",res)
      this.mascotas = res;
    });
  }

  getmascota(){
    return this.http.get("http://localhost:3000/mascotas")
   
  }

}
