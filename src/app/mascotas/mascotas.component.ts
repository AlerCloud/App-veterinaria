import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { IMascota } from '../services/imascota';
import { MascotaService } from '../services/mascota.service';

@Component({
  selector: 'app-mascotas',
  templateUrl: './mascotas.component.html',
  styleUrls: ['./mascotas.component.scss'],
})
export class MascotasComponent implements OnInit {
  public client: IMascota = {
    name: '',
    chip: '',
    type: '',
    breed: '',
    last: '',
  };

  private clientService: MascotaService;
  constructor(
    service: MascotaService,
    private router: Router,
    private alertCtrl: AlertController
  ) {
    this.clientService = service;
  }
  sendSubmit() {
    this.clientService.addClient(this.client).subscribe((response) => {
      console.log(response);
    });
    this.alertCtrl.create({
      header: 'Mascota Registrada Exitosamente',
      message: 'Su mascota ha sido registrada',
      buttons: ['OK'],
    });
  }
  ngOnInit() { }

}
