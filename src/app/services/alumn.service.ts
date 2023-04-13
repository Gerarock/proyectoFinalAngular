import { Injectable } from '@angular/core';
import { Alumno } from '../models/alumno.model';

@Injectable({
  providedIn: 'root'
})
export class AlumnService {

  constructor() { }

  public alumnosArray: Alumno[] = [
    { id: 1, nombre: 'Gerardo', apellido: 'Veliz', email: 'test@gmail.com', edad: 25, direccion: 'direccion 3736', imagen: '../../../assets/img/alumno-1.png', telefono: '8337453' }
  ];

}
