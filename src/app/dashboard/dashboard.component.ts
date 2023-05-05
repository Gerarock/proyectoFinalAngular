import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

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
