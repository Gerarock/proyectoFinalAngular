import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Alumno } from 'src/app/models/alumno.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements AfterViewInit {

  displayedColumns: string[] = ['id', 'nombre', 'apellido', 'imagen', 'edad', 'direccion'];
  dataSource = new MatTableDataSource<Alumno>(alumnosArray);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _liveAnnouncer: LiveAnnouncer) { }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  editAlumn(data: any) {
    console.log('1');
  }

  deleteAlumn(data: any) {
    console.log('2');
  }

  announceSortChange(sortState: any) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

}

const alumnosArray: Alumno[] = [
  { id: 1, nombre: 'Gerardo', apellido: 'Veliz', email: 'test@gmail.com', edad: 25, direccion: 'direccion 3736', imagen: '../../../assets/img/alumno-1.png', telefono: '8344374' }
];