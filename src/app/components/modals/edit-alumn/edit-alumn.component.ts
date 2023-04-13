import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Alumno } from 'src/app/models/alumno.model';
import { AlumnService } from 'src/app/services/alumn.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-alumn',
  templateUrl: './edit-alumn.component.html',
  styleUrls: ['./edit-alumn.component.css']
})
export class EditAlumnComponent implements OnInit {

  public formClient: FormGroup;
  public selectedAlumn: Alumno = new Alumno();

  constructor(
    private fb: FormBuilder,
    private alumnService: AlumnService,
    @Inject(MAT_DIALOG_DATA) public data: Alumno
  ) {
    this.formClient = this.fb.group({
      nombre: [this.data.nombre, [Validators.required, Validators.minLength(3), Validators.maxLength(30), Validators.pattern(/^[A-Za-z\s\xF1\xD1]+$/)]],
      apellido: [this.data.apellido, [Validators.required, Validators.minLength(3), Validators.maxLength(30), Validators.pattern(/^[A-Za-z\s\xF1\xD1]+$/)]],
      email: [this.data.email, [Validators.required, Validators.minLength(3), Validators.maxLength(40), Validators.pattern(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/)]],
      edad: [this.data.edad, [Validators.required, Validators.minLength(2), Validators.maxLength(2), Validators.pattern(/^([0-9])*$/)]],
      direccion: [this.data.direccion, [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      imagen: [this.data.imagen, []],
      telefono: [this.data.telefono, [Validators.required, Validators.minLength(7), Validators.maxLength(10), Validators.pattern(/^([0-9])*$/)]]
    });
  };

  ngOnInit(): void {
  }

  editAlumn() {
    console.log('DATA: ', this.data);
    
    if (this.data.id === 0) {
      this.selectedAlumn.id = this.alumnService.alumnosArray.length + 1;
      this.alumnService.alumnosArray.push(this.selectedAlumn);
    }
    //this.selectedAlumn = new Alumno();
    //this.formClient.reset();

    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Felicidades ' + this.formClient.value.nombre + ' ' + this.formClient.value.apellido,
      text: 'Tu usuario ' + this.formClient.value.usuario + ' fue creado correctamente',
      showConfirmButton: false,
      timer: 5000,
      timerProgressBar: true,
    })
  }
}
