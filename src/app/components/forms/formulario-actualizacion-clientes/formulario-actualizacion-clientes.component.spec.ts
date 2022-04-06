import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioActualizacionClientesComponent } from './formulario-actualizacion-clientes.component';

describe('FormularioActualizacionClientesComponent', () => {
  let component: FormularioActualizacionClientesComponent;
  let fixture: ComponentFixture<FormularioActualizacionClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioActualizacionClientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioActualizacionClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
