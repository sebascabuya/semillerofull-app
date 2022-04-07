import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioIngresoCiudadesComponent } from './formulario-ingreso-ciudades.component';

describe('FormularioIngresoCiudadesComponent', () => {
  let component: FormularioIngresoCiudadesComponent;
  let fixture: ComponentFixture<FormularioIngresoCiudadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioIngresoCiudadesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioIngresoCiudadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
