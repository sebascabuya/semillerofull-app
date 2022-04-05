import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioActualizacionDepartamentosComponent } from './formulario-actualizacion-departamentos.component';

describe('FormularioActualizacionDepartamentosComponent', () => {
  let component: FormularioActualizacionDepartamentosComponent;
  let fixture: ComponentFixture<FormularioActualizacionDepartamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioActualizacionDepartamentosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioActualizacionDepartamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
