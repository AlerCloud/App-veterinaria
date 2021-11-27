import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ITratamiento } from 'src/interfaces/ITratamiento';
import { TratamientoService } from '../services/Tratamiento.service';

import { IMascota } from 'src/interfaces/IMascota';
import { MascotaService } from '../services/mascota.service';

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { NavController } from '@ionic/angular';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-ver-desparacitaciones',
  templateUrl: './ver-desparacitaciones.component.html',
  styleUrls: ['./ver-desparacitaciones.component.scss'],
})
export class VerDesparacitacionesComponent implements OnInit {

  public tratamientos: Array<ITratamiento> = []
  public idMascota: number = 0;

  private mascota: IMascota = { especie: "", fecha: Date(), foto_perfil: "", nombre: "", raza: "", id: 0 }

  constructor(private servicio: TratamientoService, private parametroUrl: ActivatedRoute, private servicioMascota: MascotaService, private nacCtr:NavController) { }

  ngOnInit() {
    this.servicio.traerTratamientos().subscribe(data => { this.tratamientos = data })
    this.idMascota = parseInt(this.parametroUrl.snapshot.paramMap.get("id"))
    this.servicioMascota.getMascota(this.idMascota).subscribe(data => { this.mascota = data })
  }

  public pdf() {

    let fila = [['Nombre','Descripcion','Fecha']]
    var listaUno = [];

    for (let i = 0; i < this.tratamientos.length; i++) {
      if (this.tratamientos[i].tipoTratamiento == 'Desparasitante'  && this.tratamientos[i].idMascota == this.idMascota) {
        listaUno.push(this.tratamientos[i].nombre) 
        listaUno.push(this.tratamientos[i].descripcion) 
        listaUno.push(this.tratamientos[i].fecha) 
        fila.push(listaUno);        
        listaUno = []
      }
    }

    const pdfDefinition: any = {
      content: [
        {
          text: 'Ficha clinica\n\n',
          style: 'header'
        },
        {
          text: 'Datos del dueño',
          style: 'subheader'
        },
        '\n Dueño: Desconocido \n Telefono: Desconocido \n Correo: Desconocido\n\n',
        {
          text:'Datos de la mascota',
          style: 'subheader'
        },
        `Nombre: ${this.mascota.nombre} \nEspecie: ${this.mascota.raza} \nRaza: ${this.mascota.raza}\n\n\n\n`,
        {
          text: 'Desparacitantes\n',
          style: 'subheader'
        },
        '\n',
        {
          table:{
            widths: [100, '*', 'auto'],
            body:fila
          }
        }
      ],
      styles: {
        header: {
          fontSize: 20,
          bold: true
        },
        subheader: {
          fontSize: 15,
          bold: true
        },
      }
    }

    const pdf = pdfMake.createPdf(pdfDefinition);
    // pdf.open();
    pdf.download();
  }

  public irA(ruta?:string){
    this.nacCtr.back();
  }
}
