import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { AgregarMascotaComponent } from './agregar-mascota/agregar-mascota.component';
import { VerFichaComponent } from './ver-ficha/ver-ficha.component';
import { HeaderComponent } from './componentes/header/header.component';
import { MascotaService } from './services/mascota.service';
import { MascotasComponent } from './mascotas/mascotas.component';
import { VerDesparacitacionesComponent } from './ver-desparacitaciones/ver-desparacitaciones.component';
import { TratamientoService } from './services/Tratamiento.service';
import { CommonModule } from '@angular/common';
import { TratamientoComponent } from './tratamiento/tratamiento.component';
import { TratamientoPipe } from './pipes/tratamiento.pipe';
import { VerVacunasComponent } from './pages/ver-vacunas/ver-vacunas.component';
import { VerOperacionesComponent } from './pages/ver-operaciones/ver-operaciones.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    RegistroComponent,
    AgregarMascotaComponent,
    AppComponent,
    VerFichaComponent,
    HeaderComponent,
    MascotasComponent,
    TratamientoComponent,
    VerDesparacitacionesComponent,
    VerVacunasComponent,
    VerOperacionesComponent,
    TratamientoPipe
  ],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule, ReactiveFormsModule, HttpClientModule, CommonModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, MascotaService, TratamientoService],
  bootstrap: [AppComponent],
})
export class AppModule { }
