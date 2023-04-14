import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.scss']
})
export class AdministradorComponent {

  constructor(private router: Router) { }

  navigate(value: string) {
    switch (value) {
      case 'addAlumn':
        this.router.navigate(['/formulario']);
        break;
      case 'listAlumn':
        this.router.navigate(['/alumnos']);
        break;
      case 'cardAlumn':
        this.router.navigate(['/cards']);
        break;
    }
  }

}
