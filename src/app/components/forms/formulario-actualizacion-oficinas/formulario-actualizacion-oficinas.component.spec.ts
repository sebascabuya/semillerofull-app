import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioActualizacionOficinasComponent } from './formulario-actualizacion-oficinas.component';

describe('FormularioActualizacionOficinasComponent', () => {
  let component: FormularioActualizacionOficinasComponent;
  let fixture: ComponentFixture<FormularioActualizacionOficinasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioActualizacionOficinasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioActualizacionOficinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
