import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioIngresoDepartamentosComponent } from './formulario-ingreso-departamentos.component';

describe('FormularioIngresoDepartamentosComponent', () => {
  let component: FormularioIngresoDepartamentosComponent;
  let fixture: ComponentFixture<FormularioIngresoDepartamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioIngresoDepartamentosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioIngresoDepartamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
