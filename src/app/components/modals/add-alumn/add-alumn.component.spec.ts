import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAlumnComponent } from './add-alumn.component';

describe('AddAlumnComponent', () => {
  let component: AddAlumnComponent;
  let fixture: ComponentFixture<AddAlumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAlumnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAlumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
