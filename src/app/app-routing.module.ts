import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MascotasComponent } from './mascotas/mascotas.component';
import { RegistroComponent } from './registro/registro.component';

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
    path: 'agregar',
    component: MascotasComponent
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
