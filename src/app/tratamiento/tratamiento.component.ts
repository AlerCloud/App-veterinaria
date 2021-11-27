import { Component } from '@angular/core';
import { ITratamiento, tratamiento } from '../../interfaces/ITratamiento';
import { TratamientoService } from '../../services/Tratamiento.service';

@Component({
  selector: 'app-tratamiento',
  templateUrl: './tratamiento.component.html',
  styleUrls: ['./tratamiento.component.scss'],
})
export class TratamientoComponent {
  public nuevoTratamiento: ITratamiento = {
    nombre:"",
    tipoTratamiento: 'Ninguno',
    vacuna: '',
    antiparasitario: '',
    fecha: new Date(),
    idMascota:0
  }

  // private servicioTratamiento: TratamientoService
  //   constructor(servicio: TratamientoService){
  //     this.servicioTratamiento = servicio;
  //   }
  //   public ingresarTratamiento(){
  //     this.servicioTratamiento.agregarTratamiento(this.tratamiento)
  //     .subscribe( respuesta =>{
  //       console.log(respuesta);
  //     })
  //   }
  
}
