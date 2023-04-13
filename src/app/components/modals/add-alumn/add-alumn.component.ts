import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Alumno } from 'src/app/models/alumno.model';
import { AlumnService } from 'src/app/services/alumn.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-alumn',
  templateUrl: './add-alumn.component.html',
  styleUrls: ['./add-alumn.component.css']
})
export class AddAlumnComponent {

  public formClient: FormGroup;
  public selectedAlumn: Alumno = new Alumno();

  constructor(
    private fb: FormBuilder,
    private alumnService: AlumnService
  ) {
    this.formClient = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30), Validators.pattern(/^[A-Za-z\s\xF1\xD1]+$/)]],
      apellido: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30), Validators.pattern(/^[A-Za-z\s\xF1\xD1]+$/)]],
      email: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(40), Validators.pattern(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/)]],
      telefono: ['', [Validators.required, Validators.minLength(7), Validators.maxLength(10), Validators.pattern(/^([0-9])*$/)]]
    });
  };

  addAlumn() {
    this.selectedAlumn.id = this.alumnService.alumnosArray.length + 1;
    this.alumnService.alumnosArray.push(this.selectedAlumn);
    this.selectedAlumn = new Alumno();

    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Felicidades ' + this.formClient.value.nombre + ' ' + this.formClient.value.apellido,
      text: 'Tu usuario ' + this.formClient.value.usuario + ' fue creado correctamente',
      showConfirmButton: false,
      timer: 5000,
      timerProgressBar: true,
    })
    this.formClient.reset();
  }
}
 