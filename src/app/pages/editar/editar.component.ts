import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent {

  public formEditAlumn: FormGroup;
  dataEdit = JSON.parse(this.data);

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: string,
    private dialogRef: MatDialogRef<EditarComponent>
  ) {
    this.formEditAlumn = this.fb.group({
      nombre: [this.dataEdit.alumnos.nombre, [Validators.required, Validators.minLength(3), Validators.maxLength(30), Validators.pattern(/^[A-Za-z\s\xF1\xD1]+$/)]],
      apellido: [this.dataEdit.alumnos.apellido, [Validators.required, Validators.minLength(3), Validators.maxLength(30), Validators.pattern(/^[A-Za-z\s\xF1\xD1]+$/)]],
      email: [this.dataEdit.alumnos.email, [Validators.required, Validators.minLength(3), Validators.maxLength(40), Validators.pattern(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/)]],
      edad: [this.dataEdit.alumnos.edad, [Validators.required, Validators.minLength(2), Validators.maxLength(2), Validators.pattern(/^([0-9])*$/)]],
      direccion: [this.dataEdit.alumnos.direccion, [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      imagen: [this.dataEdit.alumnos.imagen, []],
      telefono: [this.dataEdit.alumnos.telefono, [Validators.required, Validators.minLength(7), Validators.maxLength(10), Validators.pattern(/^([0-9])*$/)]]
    });
  };

  editAlumn(): void {
    if (this.formEditAlumn.valid) {
      const beforeAlumnos = this.dataEdit.alumnos;
      const alumno = this.formEditAlumn.value;
      const alumnos = this.dataEdit.listAlumnos;
      const index = alumnos.findIndex((s: any) => s.nombre === beforeAlumnos.nombre && s.apellido === beforeAlumnos.apellido);
      if (index >= 0) {
        alumnos[index] = alumno;
        this.dialogRef.close(alumnos)
      }
    }
  }
}
