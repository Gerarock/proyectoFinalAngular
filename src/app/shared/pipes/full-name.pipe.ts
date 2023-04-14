import { Pipe, PipeTransform } from '@angular/core';
import { IAlumnos } from 'src/app/interface/alumnos';

@Pipe({
  name: 'fullName'
})
export class FullNamePipe implements PipeTransform {

  transform(value: IAlumnos) {
    const { nombre, apellido } = value;
    const fullName = `${nombre} ${apellido}`
    return fullName;
  }

}


