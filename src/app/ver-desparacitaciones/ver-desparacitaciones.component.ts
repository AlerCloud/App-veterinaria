import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ITratamiento } from 'src/interfaces/ITratamiento';
import { TratamientoService } from '../services/Tratamiento.service';

@Component({
  selector: 'app-ver-desparacitaciones',
  templateUrl: './ver-desparacitaciones.component.html',
  styleUrls: ['./ver-desparacitaciones.component.scss'],
})
export class VerDesparacitacionesComponent implements OnInit {

  public tratamientos:Array<ITratamiento> = []
  public idMascota:number = 0;


  constructor(private servicio:TratamientoService, private parametroUrl:ActivatedRoute) { }

  ngOnInit() {
    this.servicio.traerTratamientos().subscribe(data => {this.tratamientos = data})
    this.idMascota = parseInt(this.parametroUrl.snapshot.paramMap.get("id"))
  }

}
