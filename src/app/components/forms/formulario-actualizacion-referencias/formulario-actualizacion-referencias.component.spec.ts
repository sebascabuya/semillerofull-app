import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioActualizacionReferenciasComponent } from './formulario-actualizacion-referencias.component';

describe('FormularioActualizacionReferenciasComponent', () => {
  let component: FormularioActualizacionReferenciasComponent;
  let fixture: ComponentFixture<FormularioActualizacionReferenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioActualizacionReferenciasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioActualizacionReferenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
