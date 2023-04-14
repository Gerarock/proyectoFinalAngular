import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ELEMENT_DATA } from 'src/app/constants/constants';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent {

  public formAddAlumn: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder
  ) {
    this.formAddAlumn = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30), Validators.pattern(/^[A-Za-z\s\xF1\xD1]+$/)]],
      apellido: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30), Validators.pattern(/^[A-Za-z\s\xF1\xD1]+$/)]],
      email: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(40), Validators.pattern(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/)]],
      edad: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(2), Validators.pattern(/^([0-9])*$/)]],
      direccion: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      imagen: ['', []],
      telefono: ['', [Validators.required, Validators.minLength(7), Validators.maxLength(10), Validators.pattern(/^([0-9])*$/)]]
    });
  };

  addAlumn(): void {
    if (this.formAddAlumn.valid) {
      const dataAlumn = {
        nombre: this.formAddAlumn.value.nombre,
        apellido: this.formAddAlumn.value.apellido,
        email: this.formAddAlumn.value.email,
        edad: this.formAddAlumn.value.edad,
        direccion: this.formAddAlumn.value.direccion,
        imagen: '../../../assets/img/alumno.png',
        telefono: this.formAddAlumn.value.telefono
      }
      ELEMENT_DATA.push(dataAlumn);
      Swal.fire({
        title: '¡Registro insertado!',
        text: 'El alumno ' + this.formAddAlumn.value.nombre + ' ' + this.formAddAlumn.value.apellido + ' fue creado exitosamente',
        icon: 'success',
        showCancelButton: true,
        cancelButtonColor: '#dc3545',
        confirmButtonColor: '#28a745',
        confirmButtonText: 'Revisar lista de alumnos',
        cancelButtonText: 'Insertar nuevo alumno',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          this.router.navigate(['/alumnos']);
        } else {
          this.formAddAlumn.reset();
        }
      })
    }
  }
}




