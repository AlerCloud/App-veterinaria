import { Component } from '@angular/core';
import { ITratamiento } from '../../interfaces/ITratamiento';
import { TratamientoService } from '../../services/Tratamiento.service';

@Component({
  selector: 'app-tratamiento',
  templateUrl: './tratamiento.component.html',
  styleUrls: ['./tratamiento.component.scss'],
})
export class TratamientoComponent {
  public tratamiento: ITratamiento = {
    tipoTratamiento: '',
    vacuna: '',
    antiparasitario: '',
    fecha: new Date(),
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
