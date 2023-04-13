import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AlumnService } from 'src/app/services/alumn.service';
import { EditAlumnComponent } from '../modals/edit-alumn/edit-alumn.component';
import Swal from 'sweetalert2';
import { Alumno } from 'src/app/models/alumno.model';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.css']
})
export class ListasComponent {

  public selectedAlumn: Alumno = new Alumno();
  public flag: boolean = false;
  public alumnosArray;

  constructor(public dialog: MatDialog, private alumnoService: AlumnService) {
    this.alumnosArray = alumnoService.alumnosArray;
  }

  selectAlumno() {
    this.flag = !this.flag;
  }

  editAlumn(data: any) {
    const dialogRef = this.dialog.open(EditAlumnComponent, { data });
    dialogRef.afterClosed()
      .subscribe((valor) => console.log(valor));
  }

  deleteAlumn() {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.alumnoService.alumnosArray = this.alumnoService.alumnosArray.filter(x => x != this.selectedAlumn);
        console.log('AKSDKAD: ', this.alumnoService.alumnosArray);
        this.selectedAlumn = new Alumno();
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }

}
