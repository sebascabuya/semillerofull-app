import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioIngresoReferenciasComponent } from './formulario-ingreso-referencias.component';

describe('FormularioIngresoReferenciasComponent', () => {
  let component: FormularioIngresoReferenciasComponent;
  let fixture: ComponentFixture<FormularioIngresoReferenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioIngresoReferenciasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioIngresoReferenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
