import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IniciComponent } from './inici/inici.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { NosaltresComponent } from './nosaltres/nosaltres.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [

  {path: '', pathMatch: 'full', redirectTo: 'inici'},
  {path: 'inici', component: IniciComponent},
  {path: 'galeria', component: GaleriaComponent},
  {path: 'nosaltres', component: NosaltresComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', redirectTo: 'inici'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
