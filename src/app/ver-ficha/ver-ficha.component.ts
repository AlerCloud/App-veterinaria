import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { IMascota } from 'src/interfaces/IMascota';
import { MascotaService } from '../services/mascota.service';

@Component({
  selector: 'app-ver-ficha',
  templateUrl: './ver-ficha.component.html',
  styleUrls: ['./ver-ficha.component.scss'],
})
export class VerFichaComponent implements OnInit {

  public mascota:IMascota = {especie:"",fecha:Date(), foto_perfil:"", nombre:"",raza:"",id:0}
  
  constructor(private parametroUrl:ActivatedRoute, private servicio:MascotaService, private navCtr:NavController) { }

  ngOnInit() {
    this.servicio.getMascota(parseInt(this.parametroUrl.snapshot.paramMap.get("id"))).subscribe(dato => {
      this.mascota = dato
      console.log(dato);
      
    });
  }

  /**
   * irA
   */
  public irTratamiento() {
    this.navCtr.navigateForward("tratamiento/"+this.mascota.id)
  }

}
