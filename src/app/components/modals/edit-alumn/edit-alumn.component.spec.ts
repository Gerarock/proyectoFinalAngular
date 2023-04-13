import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAlumnComponent } from './edit-alumn.component';

describe('EditAlumnComponent', () => {
  let component: EditAlumnComponent;
  let fixture: ComponentFixture<EditAlumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAlumnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditAlumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
