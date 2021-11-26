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

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    RegistroComponent,
    AgregarMascotaComponent,
    AppComponent,
    VerFichaComponent,
    HeaderComponent ],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, MascotaService],
  bootstrap: [AppComponent],
})
export class AppModule { }
