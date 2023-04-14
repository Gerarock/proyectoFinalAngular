import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministradorComponent } from './administrador.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AlumnosComponent } from '../pages/alumnos/alumnos.component';
import { MatTableModule } from '@angular/material/table';
import { AppRoutingModule } from '../app-routing.module';
import { FormularioComponent } from '../pages/formulario/formulario.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { EditarComponent } from '../pages/editar/editar.component';
import { MatDialogModule } from '@angular/material/dialog';
import { SharedModule } from '../shared/shared.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { CardsComponent } from '../cards/cards.component';

@NgModule({
  declarations: [
    AdministradorComponent,
    AlumnosComponent,
    EditarComponent,
    FormularioComponent,
    CardsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    MatDialogModule,
    AppRoutingModule,
    MatGridListModule
  ],
  exports: [
    AdministradorComponent,
    AlumnosComponent,
    FormularioComponent,
    EditarComponent
  ],
  entryComponents: [
    EditarComponent
  ]
})
export class AdministradorModule { }
