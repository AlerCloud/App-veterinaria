import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

import { IMascota } from 'src/interfaces/IMascota';
import { RestService } from '../rest.service';
@Component({
  selector: 'app-agregar-mascota',
  templateUrl: './agregar-mascota.component.html',
  styleUrls: ['./agregar-mascota.component.scss'],
})
export class AgregarMascotaComponent implements OnInit {
  public dato: IMascota = {
    foto_perfil:'',
    nombre: '',
    especie: '',
    raza: '',
    fecha: ''

  }

  
  private servicio: RestService
  constructor( datoServicio: RestService) { 
    this.servicio = datoServicio;
      
    }

    public agregarDato(){
      console.log(this.dato);
      this.servicio.agregarDato(this.dato)
      .subscribe( respuesta =>{
        console.log(respuesta);
      })
    }
    ngOnInit() {
      this.servicio.ListarDatos()
      .subscribe( respuesta => {
        console.log(respuesta)
  
      })
    }

}
