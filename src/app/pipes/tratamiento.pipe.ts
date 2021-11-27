import { Pipe, PipeTransform } from '@angular/core';
import { ITratamiento } from 'src/interfaces/ITratamiento';

@Pipe({
  name: 'tratamiento'
})
export class TratamientoPipe implements PipeTransform {

  transform(tratamientos: Array<ITratamiento>, idMascota:number, tipo:string): Array<ITratamiento> {
    let respuesta = []
    
    for (let i = 0; i < tratamientos.length; i++) {
      // if (tratamientos[i].tipoTratamiento == tipo) {
      //   console.log(tratamientos[i]);
      // }
      
      if (tratamientos[i].idMascota == idMascota && tratamientos[i].tipoTratamiento == tipo) {
        respuesta.push(tratamientos[i])
        
      }
      // console.log(idMascota);
      
    }
    // console.log(respuesta);
    
    return respuesta;
  }

}
