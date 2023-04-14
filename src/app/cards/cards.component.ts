import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ELEMENT_DATA } from 'src/app/constants/constants';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {
  public dataSource;

  constructor(public dialog: MatDialog) {
    this.dataSource = ELEMENT_DATA;
  }

}
