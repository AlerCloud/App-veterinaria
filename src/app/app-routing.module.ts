import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AgregarMascotaComponent } from './agregar-mascota/agregar-mascota.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { MascotasComponent } from './mascotas/mascotas.component';
import { RegistroComponent } from './registro/registro.component';
import { VerDesparacitacionesComponent } from './ver-desparacitaciones/ver-desparacitaciones.component';
import { VerFichaComponent } from './ver-ficha/ver-ficha.component';

const routes: Routes = [

  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'registro',
    component: RegistroComponent

  },
  {
    path:'main',
    component: MainComponent
  },
  {
    path:'agregar',
    component: AgregarMascotaComponent
    
  },
  {
    path:'ficha',
    component: VerFichaComponent

  },
  {
    path: 'agregarMascota',
    component: MascotasComponent

  },
  {
    path: 'verDesparacitaciones',
    component: VerDesparacitacionesComponent

  },
  // {
  //   path: 'home',
  //   loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  // },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
