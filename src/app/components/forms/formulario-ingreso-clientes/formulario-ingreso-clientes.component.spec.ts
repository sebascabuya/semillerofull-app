import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioIngresoClientesComponent } from './formulario-ingreso-clientes.component';

describe('FormularioIngresoClientesComponent', () => {
  let component: FormularioIngresoClientesComponent;
  let fixture: ComponentFixture<FormularioIngresoClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioIngresoClientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioIngresoClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
