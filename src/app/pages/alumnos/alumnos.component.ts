import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ELEMENT_DATA } from 'src/app/constants/constants';
import { EditarComponent } from '../editar/editar.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss']
})
export class AlumnosComponent {
  displayedColumns: string[] = ['nombre', 'edad', 'email', 'direccion', 'telefono', 'editar', 'eliminar'];
  dataSource = ELEMENT_DATA;

  constructor(private dialogService: MatDialog) { }

  deleteAlumn(element: any) {
    Swal.fire({
      title: 'Vas a eliminar el alumno ' + element.nombre + ' ' + element.apellido,
      text: "¿Realmente deseas continuar?",
      icon: 'warning',
      showCancelButton: true,
      cancelButtonColor: '#dc3545',
      confirmButtonColor: '#28a745',
      confirmButtonText: 'Si, eliminar alumno',
      cancelButtonText: 'Cancelar',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {

        const index = this.dataSource.indexOf(element);
        if (index !== -1) { this.dataSource.splice(index, 1) }
        this.dataSource = this.dataSource.slice();

        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'El Alumno ' + element.nombre + ' ' + element.apellido + ' fue eliminado',
          showConfirmButton: false,
          timerProgressBar: true,
          timer: 2100,
        })
      }
    })
  }

  editAlumn(element: any): void {
    const datos = {
      alumnos: element,
      listAlumnos: this.dataSource
    }
    const dialogRef = this.dialogService.open(EditarComponent, {
      data: JSON.stringify(datos)
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.dataSource = result;
      }
    })
  }

}
