import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TratamientoService } from 'src/app/services/Tratamiento.service';
import { ITratamiento } from 'src/interfaces/ITratamiento';

@Component({
  selector: 'app-ver-vacunas',
  templateUrl: './ver-vacunas.component.html',
  styleUrls: ['./ver-vacunas.component.scss'],
})
export class VerVacunasComponent implements OnInit {

  public tratamientos:Array<ITratamiento> = []
  public idMascota:number = 0;

  constructor(private servicio:TratamientoService, private parametroUrl:ActivatedRoute) { }

  ngOnInit() {
    this.servicio.traerTratamientos().subscribe(data => {this.tratamientos = data})
    this.idMascota = parseInt(this.parametroUrl.snapshot.paramMap.get("id"))

  }

}
