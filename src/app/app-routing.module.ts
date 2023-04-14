import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnosComponent } from './pages/alumnos/alumnos.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { CardsComponent } from './cards/cards.component';

const routes: Routes = [
  { path: '', redirectTo: 'alumnos', pathMatch: 'full' },
  { path: 'formulario', component: FormularioComponent },
  { path: 'alumnos', component: AlumnosComponent },
  { path: 'cards', component: CardsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
