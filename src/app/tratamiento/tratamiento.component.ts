import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ITratamiento, tratamiento } from '../../interfaces/ITratamiento';
import { TratamientoService } from '../services/Tratamiento.service';

@Component({
  selector: 'app-tratamiento',
  templateUrl: './tratamiento.component.html',
  styleUrls: ['./tratamiento.component.scss'],
})
export class TratamientoComponent {
  public nuevoTratamiento: ITratamiento = {
    nombre: "",
    descripcion: "",
    tipoTratamiento: 'Ninguno',
    fecha: new Date(),
    idMascota: parseInt(this.parametroUrl.snapshot.paramMap.get("id"))
  }

  public estadoVacuna: boolean = true
  public estadoOperacion: boolean = true
  public estadoDesparacitante: boolean = true

  public vacunas: any = []
  public operaciones: any = []
  public desparacitantes: any = []

  constructor(private servicioTratamiento: TratamientoService, private navCtr:NavController, private parametroUrl:ActivatedRoute) {

  }
  ngOnInit() {
    this.servicioTratamiento.traerVacunas().subscribe(datos => { this.vacunas = datos, console.log(datos) })
    this.servicioTratamiento.traerDesparacitaciones().subscribe(datos => { this.desparacitantes = datos, console.log(datos) })
    this.servicioTratamiento.traerOperaciones().subscribe(datos => { this.operaciones = datos, console.log(datos) })
  }

  public seleccionarTratamiento(evento) {

    if (evento.detail.value == "operacion") {

      this.estadoOperacion = false
      this.estadoDesparacitante = true
      this.estadoVacuna = true

      this.nuevoTratamiento.tipoTratamiento = "Operación"

    } else if (evento.detail.value == "vacuna") {

      this.estadoVacuna = false
      this.estadoOperacion = true
      this.estadoDesparacitante = true

      this.nuevoTratamiento.tipoTratamiento = 'Vacuna'

    } else if (evento.detail.value == "desparacitacion") {

      this.estadoDesparacitante = false
      this.estadoVacuna = true
      this.estadoOperacion = true

      this.nuevoTratamiento.tipoTratamiento = 'Desparasitante'

    } else {
      this.estadoOperacion = true
      this.estadoDesparacitante = true
      this.estadoVacuna = true
      this.nuevoTratamiento.tipoTratamiento = 'Ninguno'
    }

    // console.log(this.estadoDesparacitante);
    // console.log(this.estadoOperacion);
    // console.log(this.estadoVacuna);

    // console.log(evento.detail.value);


  }

  // private servicioTratamiento: TratamientoService
  //   constructor(servicio: TratamientoService){
  //     this.servicioTratamiento = servicio;
  //   }

  public cambioNombre(ev){
    this.nuevoTratamiento.nombre = ev.detail.value
    console.log(this.nuevoTratamiento);
    
  }

  public ingresarTratamiento() {
  
    let respuesta = this.servicioTratamiento.agregarTratamiento(this.nuevoTratamiento)
    .subscribe(respuesta => {
      console.log(respuesta);
    });
    
    if (respuesta) {
      this.navCtr.navigateForward("ficha/"+this.parametroUrl.snapshot.paramMap.get("id"))
    }
    
  }

}
