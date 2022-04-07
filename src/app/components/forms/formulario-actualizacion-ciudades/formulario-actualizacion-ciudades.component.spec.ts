import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioActualizacionCiudadesComponent } from './formulario-actualizacion-ciudades.component';

describe('FormularioActualizacionCiudadesComponent', () => {
  let component: FormularioActualizacionCiudadesComponent;
  let fixture: ComponentFixture<FormularioActualizacionCiudadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioActualizacionCiudadesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioActualizacionCiudadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
